<script>
import { 
  Clock, 
  Users, 
  ThumbsUp, 
  Zap, 
  Shield, 
  Target, 
  Rocket, 
  Heart, 
  Star,
  CheckCircle,
  TrendingUp,
  Award,
  Lightbulb,
  Globe,
  Smartphone
} from 'lucide-vue-next'

export default {
  name: 'BenefitsCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      default: 'text-blue-500'
    },
    titleColor: {
      type: String,
      default: 'text-[#2D3748]'
    },
    descriptionColor: {
      type: String,
      default: 'text-gray-500'
    }
  },
  computed: {
    iconComponent() {
      // Mapeo de strings a componentes de iconos
      const iconMap = {
        'clock': Clock,
        'users': Users,
        'thumbs-up': ThumbsUp,
        'zap': Zap,
        'shield': Shield,
        'target': Target,
        'rocket': Rocket,
        'heart': Heart,
        'star': Star,
        'check-circle': CheckCircle,
        'trending-up': TrendingUp,
        'award': Award,
        'lightbulb': Lightbulb,
        'globe': Globe,
        'smartphone': Smartphone
      }
      
      return iconMap[this.icon] || null
    }
  }
}
</script>

<template>
  <div class="group backdrop-blur-sm shadow-lg h-[400px] cursor-pointer hover:bg-coolPurple  bg-white p-6 transition-all duration-300 ease-in-out flex flex-col items-center justify-start text-start max-w-sm mx-auto">
    <div class="w-full">
      <div class="mb-8 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
        <!-- Lucide Icon Component -->
        <component 
          v-if="iconComponent"
          :is="iconComponent" 
          class="text-coolPurple group-hover:text-white w-20 h-20 transition-colors duration-300"
        />
        <!-- Fallback for unknown icons -->
        <span 
          v-else
          class="text-coolPurple group-hover:text-white text-3xl font-bold transition-colors duration-300"
        >
          ?
        </span>
      </div>
    </div>

    <!-- Title -->
    <h3 :class="[titleColor, 'group-hover:text-white mb-5 text-left leading-[32px] font-bold text-3xl lg:text-4xl text-gray-600 transition-colors duration-300']">
      {{ title }}
    </h3>

    <!-- Description -->
    <p :class="[descriptionColor, 'group-hover:text-white text-left text-md leading-sm font-light leading-[28px] font-[\'Poppins\'] max-w-xs transition-colors duration-300']">
      {{ description }}
    </p>
  </div>
</template> 