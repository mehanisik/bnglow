import {
  Beach02Icon,
  Bicycle01Icon,
  Car01Icon,
  Compass01Icon,
  Restaurant01Icon,
  Shield01Icon,
  Tree01Icon,
  Wifi01Icon,
} from 'hugeicons-react'

const amenities = [
  {
    icon: Beach02Icon,
    title: 'Beach Access',
    description: '200m to Sunset Beach',
  },
  {
    icon: Restaurant01Icon,
    title: 'Restaurant & Bar',
    description: 'Fresh Zanzibari cuisine, buffet breakfast',
  },
  { icon: Wifi01Icon, title: 'Free WiFi', description: 'Throughout property' },
  {
    icon: Tree01Icon,
    title: 'Garden Views',
    description: 'Tropical palm garden setting',
  },
  {
    icon: Compass01Icon,
    title: 'Water Activities',
    description: 'Snorkeling, diving, kite surfing',
  },
  {
    icon: Car01Icon,
    title: 'Airport Transfer',
    description: '$50 from Zanzibar Airport',
  },
  {
    icon: Shield01Icon,
    title: '24/7 Reception',
    description: 'Friendly multilingual staff',
  },
  { icon: Bicycle01Icon, title: 'Bike Rental', description: '$5 per day' },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="inline-block px-3 py-1 text-[10px] tracking-[0.25em] text-accent uppercase mb-5 border border-accent/30 rounded-full">
            Resort Amenities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6">
            Everything You <span className="italic text-accent">Need</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="group p-6 md:p-8 bg-background hover:bg-background/80 border border-border/50 rounded-xl transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-xl mb-4 group-hover:bg-accent/15 transition-colors duration-300">
                <amenity.icon
                  className="text-accent"
                  size={24}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
