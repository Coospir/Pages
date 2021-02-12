const icons = {
  like: `
  <svg class="ico-heart" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3124 0.333362C16.6235 0.333344 15.5348 0.534551 14.2868 1.14543C13.8247 1.3716 13.3912 1.64397 12.9886 1.96173C12.6015 1.66178 12.1854 1.40191 11.7424 1.18283C10.4702 0.553581 9.32565 0.333344 7.6973 0.333344C3.33617 0.333344 0.166992 3.94682 0.166992 8.63986C0.166992 12.1841 2.14313 15.6077 5.82397 18.9182C7.75603 20.6559 10.2229 22.3756 11.9895 23.2904L13.0003 23.8138L14.0111 23.2904C15.7778 22.3756 18.2446 20.6559 20.1767 18.9182C23.8575 15.6077 25.8337 12.1841 25.8337 8.63986C25.8337 3.9965 22.6346 0.351262 18.3124 0.333362ZM23.5003 8.63986C23.5003 11.4166 21.8509 14.2742 18.6163 17.1833C16.8529 18.7694 14.5858 20.3544 13.0003 21.186C11.4149 20.3544 9.14778 18.7694 7.38431 17.1833C4.14978 14.2742 2.50033 11.4166 2.50033 8.63986C2.50033 5.17235 4.69791 2.66668 7.6973 2.66668C8.99199 2.66668 9.78981 2.8202 10.708 3.27433C11.2503 3.54257 11.7297 3.89678 12.1446 4.33941L13.0031 5.25516L13.8537 4.33215C14.2779 3.87179 14.7643 3.50952 15.3126 3.24117C16.2038 2.80492 16.9518 2.66668 18.3076 2.66669C21.2699 2.67896 23.5003 5.22047 23.5003 8.63986Z" fill="black"></path>
  </svg>
  `,
  cart: `
  <svg class="ico-cart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.36563 0.333325L1.33536 0.349276C1.18092 0.348419 1.02785 0.378232 0.885025 0.436983C0.742197 0.495735 0.612454 0.582258 0.503319 0.691534C0.394185 0.800809 0.30783 0.930664 0.249263 1.07357C0.190695 1.21647 0.161081 1.36958 0.162137 1.52402C0.163192 1.67845 0.194897 1.83114 0.255413 1.97323C0.315928 2.11532 0.40405 2.24398 0.514669 2.35176C0.625287 2.45953 0.756201 2.54427 0.899819 2.60107C1.04344 2.65786 1.1969 2.68558 1.35131 2.68261L2.60001 2.67349L6.44181 11.8929L5.045 14.126C4.06692 15.6878 5.25621 17.8333 7.09806 17.8333H19.9998C20.1543 17.8355 20.3078 17.8069 20.4513 17.7493C20.5948 17.6917 20.7253 17.6061 20.8354 17.4975C20.9455 17.389 21.033 17.2596 21.0926 17.117C21.1523 16.9743 21.183 16.8213 21.183 16.6667C21.183 16.512 21.1523 16.359 21.0926 16.2163C21.033 16.0737 20.9455 15.9444 20.8354 15.8358C20.7253 15.7273 20.5948 15.6417 20.4513 15.584C20.3078 15.5264 20.1543 15.4978 19.9998 15.5H7.09806C6.96824 15.5 6.95327 15.4744 7.02286 15.3633C7.02362 15.3633 7.02438 15.3633 7.02514 15.3633L8.39688 13.1667H17.1081C17.9551 13.1667 18.7369 12.7066 19.1475 11.9658L23.3494 4.39843C23.7822 3.62143 23.2198 2.66666 22.3308 2.66666H5.12475L4.45255 1.0511C4.36327 0.83695 4.21218 0.65428 4.01857 0.526426C3.82497 0.398573 3.59764 0.331343 3.36563 0.333325ZM7.16642 19C6.54758 19 5.95408 19.2458 5.5165 19.6834C5.07892 20.121 4.83308 20.7145 4.83308 21.3333C4.83308 21.9522 5.07892 22.5457 5.5165 22.9832C5.95408 23.4208 6.54758 23.6667 7.16642 23.6667C7.78525 23.6667 8.37875 23.4208 8.81633 22.9832C9.25392 22.5457 9.49975 21.9522 9.49975 21.3333C9.49975 20.7145 9.25392 20.121 8.81633 19.6834C8.37875 19.2458 7.78525 19 7.16642 19ZM18.8331 19C18.2142 19 17.6208 19.2458 17.1832 19.6834C16.7456 20.121 16.4998 20.7145 16.4998 21.3333C16.4998 21.9522 16.7456 22.5457 17.1832 22.9832C17.6208 23.4208 18.2142 23.6667 18.8331 23.6667C19.4519 23.6667 20.0454 23.4208 20.483 22.9832C20.9206 22.5457 21.1664 21.9522 21.1664 21.3333C21.1664 20.7145 20.9206 20.121 20.483 19.6834C20.0454 19.2458 19.4519 19 18.8331 19Z" fill="black"></path>
</svg>
  `,
}

export default icons;