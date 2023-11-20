import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-200 py-12">
      <div class="container mx-auto flex flex-wrap justify-between">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 class="text-lg font-semibold mb-4">Explore</h3>
          <ul>
            <li class="mb-2">
              <a href="#">Destinations</a>
            </li>
            <li class="mb-2">
              <a href="#">Travel Tips</a>
            </li>
            <li class="mb-2">
              <a href="#">Guides</a>
            </li>
          </ul>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li class="mb-2">
              <a href="#">About Us</a>
            </li>
            <li class="mb-2">
              <a href="#">Contact Us</a>
            </li>
            <li class="mb-2">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <ul class="flex">
            <li class="mr-4">
              <a href="#" class="text-white">
                <Icon icon="logos:facebook" width="30" />
              </a>
            </li>
            <li class="mr-4">
              <a href="#" class="text-white">
                <Icon icon="icon-park-twotone:big-x" width="30" />
              </a>
            </li>
            <li class="mr-4">
              <a href="#" class="text-white">
                <Icon icon="skill-icons:instagram" width="30" />
              </a>
            </li>
            <li>
              <a href="#" class="text-white">
                <Icon icon="logos:pinterest" width="30" />
              </a>
            </li>
          </ul>
        </div>

        <div class="w-full mt-8 md:w-1/2 lg:w-1/4 md:mt-0">
          <h3 class="text-lg font-semibold mb-4">Subscribe</h3>
          <div class="flex">
            <input
              type="text"
              placeholder="Your email"
              class="py-2 px-3 rounded-l-lg bg-white text-gray-900 w-full"
            />
            <button class="bg-blue-500 py-2 px-4 text-white rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
