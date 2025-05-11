// components/Partners.jsx
import React from 'react'
import Image from 'next/image'

const companies = [
  { src: '/logos/disney.png', alt: 'Disney+' },
  { src: '/logos/google.png', alt: 'Google' },
  { src: '/logos/hubspot.png', alt: 'HubSpot' },
  { src: '/logos/youtube.png', alt: 'YouTube' },
  { src: '/logos/slack.png', alt: 'Slack' },
  { src: '/logos/shopify.png', alt: 'Shopify' },
]

const Partners = () => {
  return (
    <div className="mt-16">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
        Trusted by top-leading companies.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
        {companies.map(({ src, alt }) => (
          <Image
            key={alt}
            src={src}
            alt={alt}
            width={80}
            height={30}
            className="object-contain hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  )
}

export default Partners
