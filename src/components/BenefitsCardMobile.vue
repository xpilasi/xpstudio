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
    },
    iconBgColor: {
      type: String,
      default: 'bg-gray-200'
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
  <div class=" w-full  shadow-lg bg-white py-10 px-10 transition-all duration-300 ease-in-out flex flex-col items-center text-start mx-auto min-h-[300px]">
    <div class="flex w-full">
 <!-- Icon Container -->

      <!-- Lucide Icon Component -->
      <component 
        v-if="iconComponent"
        :is="iconComponent" 
        :class="['text-coolPurple', 'w-10 h-10 lg:w-10 lg:h-10']"
      />
      <!-- Fallback for unknown icons -->
      <span 
        v-else
        :class="['text-coolPurple', 'text-2xl font-bold']"
      >
        ?
      </span>
   
    </div>
   
    <!-- Title -->
    <h3 :class="[titleColor, 'mb-5 text-start leading-8 font-bold text-3xl text-gray-600 mt-5']">
      {{ title }}
    </h3>

    <!-- Description -->
    <p :class="[descriptionColor, 'text-start text-sm leading-6 font-light max-w-xs']">
      {{ description }}
    </p>

  </div>
</template> 