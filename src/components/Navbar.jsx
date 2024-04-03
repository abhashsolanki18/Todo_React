import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="bg-[#ead7d1] p-4">
                <div class="max-w-7xl mx-auto flex justify-between items-center">
                    <div class="text-black text-lg font-bold">IPLANNER</div>
                    <ul class="flex space-x-4">
                        <li><a href="#" class="text-black transition duration-300 hover:text-blue-500 hover:font-bold">Home</a></li>
                        <li><a href="#" class="text-black transition duration-300 hover:text-blue-500 hover:font-bold">Your Tasks</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
