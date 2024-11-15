import React from 'react'

const Firstsection = () => {
    return (
        <>
            <div class=" bg-gray-100 p-4 sm:px-6 md:px-8 lg:px-10 xl:px-24 flex flex-col-reverse lg:flex-row items-center py-20 ">
                <div class="lg:w-1/2 space-y-6 lg:pr-8">
                    <h1 class="text-4xl font-semibold text-gray-900 leading-snug">
                        <span class="italic text-5xl sm:text-center">Discover the Power of Brass: Electrical</span>
                    </h1>
                    <p class="text-gray-600">
                        Elevate your electrical projects with our premium brass components, engineered for durability and style. Explore our wide range of products designed to enhance the functionality and aesthetics of your projects.
                    </p>
                    <div>
                        <a href="#" class="bg-purple-500 text-white rounded-full py-2 px-6 text-sm font-medium hover:bg-purple-600 transition">
                            Shop Now
                        </a>
                    </div>
                    <p class="text-purple-500 font-medium text-sm">Crafted for Excellence</p>
                </div>

                <div class="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                    <img src="path/to/your-image.png" alt="Computer screen with dark UI" class="w-full max-w-md lg:max-w-full" />
                </div>
            </div>

            {/* --------------second section-------------- */}
            <div class="bg-[#0d1b2a] text-white py-32 sm:px-6 md:px-8 lg:px-10 xl:px-24 p-4">
                <div class="container mx-auto flex flex-col lg:flex-row items-center">

                    <div class="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                        <img src="path/to/your/brass-component-image.png" alt="Brass Component" class="max-w-xs lg:max-w-md" />
                    </div>

                    <div class="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
                        <h2 class="text-3xl lg:text-4xl font-bold mb-4">Elevating Brass: Crafting</h2>
                        <p class="text-gray-300 mb-6">
                            Our brass electrical components are meticulously designed to deliver unparalleled performance and timeless elegance. Crafted with precision, each piece is a testament to the enduring beauty and quality.
                            <br /><br />
                            From intricate fittings to sleek connectors, our brass components seamlessly integrate into your electrical systems.
                        </p>
                        <button class="bg-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-600 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Firstsection