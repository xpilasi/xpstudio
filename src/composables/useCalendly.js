import { ref } from 'vue'

export function useCalendly() {
  const isCalendlyLoaded = ref(false)

  // Check if Calendly is loaded
  const checkCalendlyLoaded = () => {
    return typeof window !== 'undefined' && window.Calendly
  }

  // Wait for Calendly to load
  const waitForCalendly = () => {
    return new Promise((resolve) => {
      if (checkCalendlyLoaded()) {
        isCalendlyLoaded.value = true
        resolve(true)
        return
      }

      const checkInterval = setInterval(() => {
        if (checkCalendlyLoaded()) {
          isCalendlyLoaded.value = true
          clearInterval(checkInterval)
          resolve(true)
        }
      }, 100)

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval)
        resolve(false)
      }, 10000)
    })
  }

  // Open Calendly in popup
  const openCalendlyPopup = async (url, options = {}) => {
    await waitForCalendly()
    
    if (!checkCalendlyLoaded()) {
      console.error('Calendly failed to load')
      return false
    }

    const defaultOptions = {
      parentElement: document.body,
      ...options
    }

    window.Calendly.initPopupWidget({
      url,
      ...defaultOptions
    })

    return true
  }

  // Open Calendly in new tab
  const openCalendlyNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Initialize inline Calendly widget
  const initInlineCalendly = async (elementId, url, options = {}) => {
    await waitForCalendly()
    
    if (!checkCalendlyLoaded()) {
      console.error('Calendly failed to load')
      return false
    }

    const element = document.getElementById(elementId)
    if (!element) {
      console.error(`Element with id '${elementId}' not found`)
      return false
    }

    window.Calendly.initInlineWidget({
      url,
      parentElement: element,
      ...options
    })

    return true
  }

  // Utility to build Calendly URL
  const buildCalendlyUrl = (username, eventType, options = {}) => {
    const baseUrl = `https://calendly.com/${username}/${eventType}`
    
    if (Object.keys(options).length === 0) {
      return baseUrl
    }

    const params = new URLSearchParams()
    
    // Add prefill parameters
    if (options.name) params.append('name', options.name)
    if (options.email) params.append('email', options.email)
    if (options.company) params.append('a1', options.company) // Custom field
    if (options.phone) params.append('a2', options.phone) // Custom field
    
    // Add other options
    if (options.hideEventTypeDetails) params.append('hide_event_type_details', '1')
    if (options.hideLandingPageDetails) params.append('hide_landing_page_details', '1')
    if (options.backgroundColor) params.append('background_color', options.backgroundColor)
    if (options.textColor) params.append('text_color', options.textColor)
    if (options.primaryColor) params.append('primary_color', options.primaryColor)

    return `${baseUrl}?${params.toString()}`
  }

  return {
    isCalendlyLoaded,
    openCalendlyPopup,
    openCalendlyNewTab,
    initInlineCalendly,
    buildCalendlyUrl,
    checkCalendlyLoaded
  }
} 