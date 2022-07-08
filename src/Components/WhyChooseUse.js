import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Licensed & Insured',
        description:
            'Tees Home Services is lincensed & insured & COVID19 Sanitation Certified.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Award Winning Service',
        description:
            'We have been one the first certified businesses for COVID19 Satinitation in Texas.',
        icon: ScaleIcon,
    },
    {
        name: 'Free, At home Consultations',
        description:
            'Set up an appoitnment and we will be more than happy to assist you.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Great Customer Serivce',
        description:
            'Our team is committed to find the best solution to your problem.',
        icon: AnnotationIcon,
    },
]

function WhyChooseUse() {
    return (
        <div className="my-24 py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-[#c0111f] font-semibold tracking-wide uppercase">Why Choose Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#313639] sm:text-4xl">
                        A better way to renovate
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#003278] text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-[#313639]">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUse;
