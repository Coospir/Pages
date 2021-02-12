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
  social: {
    whatsapp: `
    <svg class="ico-whatsapp" width="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.6155 7.392C25.7865 4.5615 22.0245 3.0015 18.0165 3C9.7575 3 3.036 9.7185 3.033 17.9775C3.0315 20.6175 3.7215 23.1945 5.0325 25.4655L3 33L10.8495 31.1445C13.038 32.3385 15.501 32.967 18.009 32.9685H18.015C26.2725 32.9685 32.994 26.2485 32.9985 17.991C33.0015 13.9875 31.4445 10.224 28.6155 7.392ZM18.0105 29.9685C16.011 29.967 14.031 29.463 12.2865 28.5105L11.277 27.96L10.1595 28.224L7.2075 28.9215L7.929 26.2455L8.253 25.0425L7.6305 23.964C6.5835 22.152 6.0315 20.082 6.033 17.9775C6.036 11.3745 11.4105 6 18.015 6C21.219 6.0015 24.2295 7.2495 26.493 9.5115C28.7565 11.7765 30.0015 14.787 29.9985 17.988C29.9955 24.594 24.6195 29.9685 18.0105 29.9685Z" fill="#424242"/>
      <path d="M25.3473 23.331C25.0353 24.2055 23.5068 25.0485 22.8198 25.11C22.1328 25.173 21.4893 25.4205 18.3273 24.174C14.5218 22.674 12.1188 18.7725 11.9328 18.5235C11.7453 18.273 10.4043 16.494 10.4043 14.652C10.4043 12.81 11.3718 11.904 11.7153 11.5305C12.0588 11.1555 12.4638 11.0625 12.7143 11.0625C12.9633 11.0625 13.2138 11.0625 13.4313 11.0715C13.6983 11.082 13.9938 11.0955 14.2743 11.718C14.6073 12.459 15.3348 14.31 15.4278 14.4975C15.5208 14.685 15.5838 14.904 15.4593 15.153C15.3348 15.402 15.2718 15.558 15.0858 15.777C14.8983 15.996 14.6928 16.2645 14.5248 16.4325C14.3373 16.6185 14.1423 16.8225 14.3598 17.196C14.5788 17.571 15.3288 18.7965 16.4418 19.788C17.8728 21.063 19.0773 21.4575 19.4523 21.6465C19.8273 21.834 20.0448 21.8025 20.2638 21.552C20.4828 21.303 21.1998 20.46 21.4488 20.085C21.6978 19.71 21.9483 19.773 22.2918 19.8975C22.6353 20.022 24.4758 20.928 24.8493 21.1155C25.2243 21.303 25.4733 21.396 25.5663 21.552C25.6593 21.7065 25.6593 22.4565 25.3473 23.331Z" fill="#424242"/>
    </svg>
    `,
    insta: `
    <svg class="ico-insta" width="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4.5H12C7.8585 4.5 4.5 7.8585 4.5 12V24C4.5 28.1415 7.8585 31.5 12 31.5H24C28.1415 31.5 31.5 28.1415 31.5 24V12C31.5 7.8585 28.1415 4.5 24 4.5ZM18 25.5C13.8585 25.5 10.5 22.1415 10.5 18C10.5 13.8585 13.8585 10.5 18 10.5C22.1415 10.5 25.5 13.8585 25.5 18C25.5 22.1415 22.1415 25.5 18 25.5ZM27 10.5C26.172 10.5 25.5 9.828 25.5 9C25.5 8.172 26.172 7.5 27 7.5C27.828 7.5 28.5 8.172 28.5 9C28.5 9.828 27.828 10.5 27 10.5Z" fill="#424242"/>
      <path d="M18 13.5C16.8065 13.5 15.6619 13.9741 14.818 14.818C13.9741 15.6619 13.5 16.8065 13.5 18C13.5 19.1935 13.9741 20.3381 14.818 21.182C15.6619 22.0259 16.8065 22.5 18 22.5C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18C22.5 16.8065 22.0259 15.6619 21.182 14.818C20.3381 13.9741 19.1935 13.5 18 13.5Z" fill="#424242"/>
    </svg>
    `,
    telegram: `
    <svg class="ico-telegram" width="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.8234 6.15305C28.9969 6.47855 11.5564 13.8241 5.55038 16.3516C5.19938 16.4986 4.50488 16.7236 4.50488 17.4556C4.50488 18.0436 4.95638 18.3346 5.47688 18.5416C6.79088 19.0651 11.6254 21.0001 11.6254 21.0001C11.6254 21.0001 13.3519 26.1676 13.7104 27.3001C14.0689 28.4341 14.3569 28.4611 14.3569 28.4611C14.4364 28.4956 14.5144 28.5091 14.5864 28.5091C14.8174 28.5091 14.9944 28.3741 14.9944 28.3741L19.5004 24.5626L24.7864 29.4526C24.7864 29.4526 25.3114 30.0001 25.8919 30.0001C26.5984 30.0001 27.1099 29.2951 27.1999 28.8376C27.3244 28.1971 31.4254 7.60505 31.4254 7.60505C31.7974 5.94455 30.6949 5.80955 29.8234 6.15305Z" stroke="#424242" stroke-width="2" stroke-miterlimit="10"/>
      <path d="M25.2001 12C25.0126 12 24.7591 12.1785 24.6241 12.2625C22.6921 13.467 13.0051 18.9795 10.3486 20.4885C11.0971 20.7885 11.6251 21 11.6251 21C11.6251 21 13.3516 26.1675 13.7101 27.3C14.0686 28.434 14.3566 28.461 14.3566 28.461C14.4361 28.4955 14.5141 28.509 14.5861 28.509C14.6446 28.509 14.6851 28.488 14.7346 28.4745L16.5001 21.5625C16.5001 21.5625 24.5446 13.4205 25.0291 12.9465C25.4191 12.567 25.5001 12.4335 25.5001 12.3015C25.5001 12.126 25.4086 12 25.2001 12Z" fill="#424242"/>
    </svg>
    `,
    facebook: `
    <svg class="ico-facebook" width="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.2875 13.5001H21V10.5001C21 8.95209 21.126 7.97709 23.3445 7.97709H26.1465V3.20709C24.783 3.06609 23.412 2.99709 22.0395 3.00009C17.97 3.00009 15 5.48559 15 10.0486V13.5001H10.5V19.5001L15 19.4986V33.0001H21V19.4956L25.599 19.4941L26.2875 13.5001Z" fill="#424242"/>
    </svg>
    `,
  },
};

export default icons;
