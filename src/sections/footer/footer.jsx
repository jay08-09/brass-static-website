import React from 'react';
import { useState } from 'react';

const Footer = () => {

    return (
        <footer class="bg-gray-900 text-gray-300 py-10  bg-gray-100 shadow-md sm:px-6 md:px-8 lg:px-10 xl:px-24">
            <div class=" grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto flex justify-between items-start  px-4">
                <div class="flex flex-col items-start space-y-4">
                    <div class="text-white">
                        <img src="src/assets/v-cone-white.png" height='100' width='100' alt="v-cone"  />
                    </div>
                    <p class="text-sm">&copy; 2024 V-CONE, Inc. <br />All rights reserved.</p>
                </div>

                <div className='m-0'>
                    <h4 class="font-bold text-lg mb-3">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-white">Home</a></li>
                        <li><a href="#" class="hover:text-white">About</a></li>
                        <li><a href="#" class="hover:text-white">Products</a></li>
                        <li><a href="#" class="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-lg mb-3">Our Services</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-white">Brass Fittings</a></li>
                        <li><a href="#" class="hover:text-white">Brass Plates</a></li>
                        <li><a href="#" class="hover:text-white">Brass Knobs</a></li>
                        <li><a href="#" class="hover:text-white">Brass Automation</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-lg mb-3">Connect with Us</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-white">Facebook</a></li>
                        <li><a href="#" class="hover:text-white">Twitter</a></li>
                        <li><a href="#" class="hover:text-white">Instagram</a></li>
                        <li><a href="#" class="hover:text-white">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
