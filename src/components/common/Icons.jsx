// Navbar menu icon
export const MenuIcon = ({ setShowNav }) => {
  return (
    <svg
      onClick={() => setShowNav(true)}
      width="26"
      height="25"
      viewBox="0 0 31 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2H28.5M28.5 15H10.5M2 27H28.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
// NAVBAR CROSS ICON
export const CrossIcon = ({ setShowNav }) => {
  return (
    <svg
      onClick={() => setShowNav(false)}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.28033 0.54L11.0003 8.26L18.6803 0.58C18.85 0.399435 19.0543 0.254989 19.2811 0.155324C19.508 0.0556597 19.7526 0.00282869 20.0003 0C20.5308 0 21.0395 0.210714 21.4145 0.585786C21.7896 0.960859 22.0003 1.46957 22.0003 2C22.005 2.2452 21.9595 2.48877 21.8666 2.71576C21.7738 2.94275 21.6355 3.14837 21.4603 3.32L13.6803 11L21.4603 18.78C21.79 19.1025 21.9832 19.5392 22.0003 20C22.0003 20.5304 21.7896 21.0391 21.4145 21.4142C21.0395 21.7893 20.5308 22 20.0003 22C19.7454 22.0106 19.4911 21.968 19.2536 21.8751C19.016 21.7821 18.8003 21.6408 18.6203 21.46L11.0003 13.74L3.30033 21.44C3.13134 21.6145 2.92945 21.7539 2.70633 21.85C2.4832 21.9461 2.24325 21.9971 2.00033 22C1.46989 22 0.961184 21.7893 0.586112 21.4142C0.211039 21.0391 0.000325413 20.5304 0.000325413 20C-0.00433758 19.7548 0.0411562 19.5112 0.134015 19.2842C0.226874 19.0572 0.36514 18.8516 0.540325 18.68L8.32032 11L0.540325 3.22C0.210695 2.89752 0.0174046 2.46082 0.000325413 2C0.000325413 1.46957 0.211039 0.960859 0.586112 0.585786C0.961184 0.210714 1.46989 0 2.00033 0C2.48033 0.006 2.94033 0.2 3.28033 0.54Z"
        fill="white"
      />
    </svg>
  );
};
// LINKEDIN ICON
export const FooterLindedInIcon = () => {
  return (
    <svg
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_685_581)">
        <rect
          className="group-hover:fill-white duration-200"
          width="34.6909"
          height="34.6909"
          transform="matrix(-1 0 0 1 32.272 -2.89062)"
          fill="#44B902"
        />
        <path
          className="group-hover:fill-[#44B902] duration-200"
          d="M10.2467 9C9.91603 9 9.59894 9.12793 9.36514 9.35566C9.13134 9.58338 9 9.89224 9 10.2143C9 10.5363 9.13134 10.8452 9.36514 11.0729C9.59894 11.3006 9.91603 11.4286 10.2467 11.4286C10.5773 11.4286 10.8944 11.3006 11.1282 11.0729C11.362 10.8452 11.4933 10.5363 11.4933 10.2143C11.4933 9.89224 11.362 9.58338 11.1282 9.35566C10.8944 9.12793 10.5773 9 10.2467 9ZM9.07333 12.4286C9.05388 12.4286 9.03523 12.4361 9.02148 12.4495C9.00773 12.4629 9 12.4811 9 12.5V19.9286C9 19.968 9.03285 20 9.07333 20H11.42C11.4394 20 11.4581 19.9925 11.4719 19.9791C11.4856 19.9657 11.4933 19.9475 11.4933 19.9286V12.5C11.4933 12.4811 11.4856 12.4629 11.4719 12.4495C11.4581 12.4361 11.4394 12.4286 11.42 12.4286H9.07333ZM12.8867 12.4286C12.8672 12.4286 12.8486 12.4361 12.8348 12.4495C12.8211 12.4629 12.8133 12.4811 12.8133 12.5V19.9286C12.8133 19.968 12.8462 20 12.8867 20H15.2333C15.2528 20 15.2714 19.9925 15.2852 19.9791C15.2989 19.9657 15.3067 19.9475 15.3067 19.9286V15.9286C15.3067 15.6444 15.4226 15.3719 15.6288 15.171C15.8351 14.97 16.1149 14.8571 16.4067 14.8571C16.6984 14.8571 16.9782 14.97 17.1845 15.171C17.3908 15.3719 17.5067 15.6444 17.5067 15.9286V19.9286C17.5067 19.968 17.5395 20 17.58 20H19.9267C19.9461 20 19.9648 19.9925 19.9785 19.9791C19.9923 19.9657 20 19.9475 20 19.9286V15.0029C20 13.616 18.7621 12.5314 17.3453 12.6566C16.907 12.6954 16.4776 12.8011 16.0729 12.9697L15.3067 13.2897V12.5C15.3067 12.4811 15.2989 12.4629 15.2852 12.4495C15.2714 12.4361 15.2528 12.4286 15.2333 12.4286H12.8867Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_685_581">
          <rect
            x="0.471924"
            width="28.9091"
            height="28.9091"
            rx="14.4545"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
// TELEPHONE ICON
export const TelephoneIcon = () => {
  return (
    <svg
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_685_581)">
        <rect
          className="group-hover:fill-white duration-200"
          width="34.6909"
          height="34.6909"
          transform="matrix(-1 0 0 1 32.3911 -2.89062)"
          fill="#44B902"
        />
        <path
          className="group-hover:fill-[#44B902] duration-200"
          d="M12.2122 13.7606C13.0922 15.49 14.51 16.9078 16.2394 17.7878L17.5839 16.4433C17.755 16.2722 17.9933 16.2233 18.2072 16.2906C18.8917 16.5167 19.625 16.6389 20.3889 16.6389C20.551 16.6389 20.7064 16.7033 20.821 16.8179C20.9356 16.9325 21 17.0879 21 17.25V19.3889C21 19.551 20.9356 19.7064 20.821 19.821C20.7064 19.9356 20.551 20 20.3889 20C17.6336 20 14.9911 18.9055 13.0428 16.9572C11.0945 15.0089 10 12.3664 10 9.61111C10 9.44903 10.0644 9.2936 10.179 9.17899C10.2936 9.06438 10.449 9 10.6111 9H12.75C12.9121 9 13.0675 9.06438 13.1821 9.17899C13.2967 9.2936 13.3611 9.44903 13.3611 9.61111C13.3611 10.375 13.4833 11.1083 13.7094 11.7928C13.7767 12.0067 13.7278 12.245 13.5567 12.4161L12.2122 13.7606Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_685_581">
          <rect
            className="group-hover:fill-[#44B902] duration-200"
            x="0.591064"
            width="28.9091"
            height="28.9091"
            rx="14.4545"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
// GMAIL ICON
export const FooterGmailIcon = () => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_685_593)">
        <rect
          className="group-hover:fill-white duration-200"
          width="34.6909"
          height="34.6909"
          transform="matrix(-1 0 0 1 31.8 -2.89062)"
          fill="#44B902"
        />
        <path
          className="group-hover:fill-[#44B902] duration-200"
          d="M10.8412 9.9375C10.362 9.9375 9.90247 10.1279 9.56363 10.4667C9.22478 10.8055 9.03442 11.2651 9.03442 11.7443V11.9259L14.4549 14.8448L19.8753 11.9268V11.7443C19.8753 11.2651 19.685 10.8055 19.3461 10.4667C19.0073 10.1279 18.5477 9.9375 18.0685 9.9375H10.8412ZM19.8753 12.9522L14.669 15.7555C14.6032 15.7909 14.5296 15.8094 14.4549 15.8094C14.3801 15.8094 14.3066 15.7909 14.2408 15.7555L9.03442 12.9522V17.1648C9.03442 17.644 9.22478 18.1035 9.56363 18.4424C9.90247 18.7812 10.362 18.9716 10.8412 18.9716H18.0685C18.5477 18.9716 19.0073 18.7812 19.3461 18.4424C19.685 18.1035 19.8753 17.644 19.8753 17.1648V12.9522Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_685_593">
          <rect width="28.9091" height="28.9091" rx="14.4545" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// MARKET WATCH ICON 
export const AsSeenOnMarketWatchIcon = () => {
  return (
    <svg
      className=" w-[60px] h-[28px] sm:h-auto sm:w-[100px] lg:w-auto"
      width="157"
      height="74"
      viewBox="0 0 157 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.0315 16.5108L72.6938 18.2364H72.5919C72.1635 17.2707 70.9692 15.9543 68.3359 15.9543C64.0753 15.9543 59.74 19.3471 58.7519 24.7041C57.9315 29.3807 60.1117 33.5147 65.1654 33.5147C67.0101 33.5147 69.1336 32.7525 70.2395 31.1765H70.3279L70.0333 32.9325H74.7335L77.6796 16.5365L73.0315 16.5108ZM71.4837 24.6807C71.1664 26.2871 69.6911 28.8896 66.7427 28.8896C63.7943 28.8896 63.255 26.2497 63.5133 24.7275C63.9099 22.3495 65.877 20.5887 68.2158 20.5186C70.9148 20.549 71.8213 22.7493 71.4837 24.6807Z"
        fill="#061E10"
      />
      <path
        d="M80.3605 16.5108H84.7842L84.4783 18.2364H84.5667C85.5412 16.7189 87.2204 15.849 88.9813 15.9496L88.0748 20.895C85.863 20.895 84.2222 21.3978 83.7894 23.9348L82.1758 32.9208H77.4054L80.3605 16.5108Z"
        fill="#061E10"
      />
      <path
        d="M92.1586 10.1039H96.9222L94.6809 22.4523H94.7693L100.269 16.5108H105.86L98.597 23.715L102.769 32.9044H97.38L94.3115 25.0011H94.2322L92.8362 32.9044H88.0454L92.1586 10.1039Z"
        fill="#061E10"
      />
      <path
        d="M113.486 15.9309C108.664 15.9309 104.38 20.2006 103.583 24.7649C102.706 29.6262 105.885 33.461 110.449 33.461C112.145 33.4376 113.797 32.9091 115.209 31.9387C116.845 30.8959 118.209 29.4555 119.184 27.7462H114.325C113.538 28.7119 112.376 29.2708 111.152 29.2684C109.309 29.2684 107.923 28.1273 108.004 26.1725H119.936C120.092 25.754 120.203 25.3214 120.274 24.8795C121.173 19.9106 118.336 15.9309 113.486 15.9309ZM108.668 22.8919C109.373 21.1827 111.005 20.0766 112.806 20.086C115.277 20.086 115.873 21.9262 115.873 22.8919H108.668Z"
        fill="#061E10"
      />
      <path
        d="M52.4744 10.1039L44.0758 23.0977H44.0236V10.1039H39.9671L25.1028 32.9044H30.8613L39.2011 19.9106H39.2827V32.9044H43.3664L51.7062 19.9106H51.7946V32.9044H56.5582V10.1039H52.4744Z"
        fill="#061E10"
      />
      <path
        d="M132.323 16.5108H129.316L130.193 11.6261H126.025L125.688 13.4967C125.318 15.6339 124.013 16.2816 122.288 16.4804L121.549 20.2006H123.911L121.631 32.9278H126.365L128.631 20.252H131.664L132.323 16.5108Z"
        fill="#061E10"
      />
      <path
        d="M97.7109 56.1329C96.1494 59.8438 92.4328 62.8882 88.1269 62.8882C83.3044 62.8882 80.3243 58.9692 81.1719 54.0776C82.0194 49.1859 86.3344 45.3581 91.1274 45.3581C95.3291 45.3581 98.2208 48.2576 98.3092 52.2677H93.4866C93.1829 50.8204 91.8753 49.8383 90.4476 49.9856C88.2357 49.871 86.3683 51.772 85.9355 54.1384C85.5026 56.5047 86.6743 58.3239 88.9745 58.3239C90.5292 58.3192 91.9728 57.4915 92.7999 56.1329H97.7109ZM58.3508 33.7486L49.0977 39.5381H51.7153L43.3302 52.5343H43.2418V39.5381H39.1625L30.7775 52.5343H30.6959V39.5381H25.9368V62.3621H30.0885L38.4419 49.3379H38.5303V62.3317H42.6095L57.4148 39.5077H59.8193L58.3508 33.7486ZM67.3614 62.3317H62.6499L62.9671 60.5757H62.8788C61.7728 62.1891 59.6494 62.9139 57.8046 62.9139C52.7555 62.9139 50.5708 58.8196 51.3912 54.1033C52.3271 48.779 56.6987 45.3534 60.9751 45.3534C63.579 45.3534 64.8028 46.6699 65.2311 47.6356H65.3127L65.63 45.917H70.3415L67.3614 62.3317ZM59.3615 58.3566C62.3077 58.3566 63.7853 55.7237 64.1025 54.1477C64.4425 52.1859 63.5337 49.9949 60.8369 49.9949C58.5049 50.0791 56.5469 51.8328 56.139 54.2038C55.8806 55.7261 56.4789 58.359 59.3683 58.359L59.3615 58.3566ZM82.1985 45.924H79.2523L80.1294 41.0627H75.93L75.5833 42.9333C75.2139 45.0635 73.9176 45.7089 72.1839 45.9146H72.125L71.4451 49.6348H73.827L71.5177 62.3247H76.2609L78.5271 49.6582H81.5571L82.1985 45.924ZM102.196 39.5194H106.928L105.455 47.652H105.554C106.54 46.1157 108.249 45.2459 110.03 45.3698C111.505 45.3698 113.266 45.9544 114.064 47.21C115.082 48.8235 114.971 50.2498 114.431 53.182L112.806 62.3107H108.065L109.652 53.3854C109.799 52.6255 110.25 49.9318 107.728 49.9318C105.058 49.9318 104.609 52.3893 104.46 53.2054L102.835 62.2803H98.1687L102.196 39.5194Z"
        fill="#061E10"
      />
    </svg>
  );
};
// TEAM SLIDER ARROW 
export const TeamSliderArrowIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className=" group group-hover:fill-[#44B902] duration-200"
        d="M10.89 4.72885C16.5423 1.5308 23.4577 1.5308 29.11 4.72885L29.3975 4.89151C35.0225 8.07407 38.5 14.0371 38.5 20.5C38.5 26.9629 35.0225 32.9259 29.3975 36.1085L29.11 36.2712C23.4577 39.4692 16.5423 39.4692 10.89 36.2712L10.6437 36.7063L10.89 36.2711L10.6025 36.1085C4.97747 32.9259 1.5 26.9629 1.5 20.5C1.5 14.0371 4.97747 8.07407 10.6025 4.8915L10.89 4.72885Z"
        fill="white"
        stroke="#44B902"
      ></path>
      <path
        className="group-hover:fill-[white] duration-200"
        d="M24.7774 10.2354C24.9201 10.3892 25 10.5958 25 10.8109C25 11.0259 24.9201 11.2325 24.7774 11.3864L16.8046 20L24.7774 28.6119C24.9201 28.7658 25 28.9723 25 29.1874C25 29.4025 24.9201 29.6091 24.7774 29.7629C24.708 29.838 24.6251 29.8976 24.5335 29.9383C24.4419 29.979 24.3435 30 24.244 30C24.1446 30 24.0462 29.979 23.9546 29.9383C23.8629 29.8976 23.78 29.838 23.7106 29.7629L15.2323 20.6014C15.0833 20.4405 15 20.2247 15 20C15 19.7753 15.0833 19.5595 15.2323 19.3986L23.7106 10.2371C23.78 10.162 23.8629 10.1024 23.9546 10.0617C24.0462 10.021 24.1446 10 24.244 10C24.3435 10 24.4419 10.021 24.5335 10.0617C24.6251 10.1024 24.708 10.162 24.7774 10.2371V10.2354Z"
        fill="#44B902"
      ></path>
    </svg>
  );
};
// FAQ ARROW
export const FaqIcon = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "" : "rotate-180"
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};
// HERO SCROLL DOWN ICON 
export const ScrollDownIcon = () => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7">
        <path
          d="M4.22749 9.915C4.33296 9.80966 4.47593 9.75049 4.62499 9.75049C4.77406 9.75049 4.91702 9.80966 5.02249 9.915L8.74999 13.6425V2.8125C8.74999 2.66332 8.80926 2.52024 8.91475 2.41475C9.02024 2.30926 9.16331 2.25 9.31249 2.25C9.46168 2.25 9.60475 2.30926 9.71024 2.41475C9.81573 2.52024 9.87499 2.66332 9.87499 2.8125V13.6425L13.6025 9.915C13.6712 9.84096 13.7587 9.78683 13.8556 9.75832C13.9526 9.72981 14.0554 9.72797 14.1533 9.753C14.2512 9.77803 14.3405 9.829 14.4119 9.90054C14.4832 9.97208 14.534 10.0615 14.5587 10.1595C14.5838 10.2573 14.5821 10.36 14.5537 10.4569C14.5253 10.5538 14.4714 10.6412 14.3975 10.71L9.70999 15.3975C9.60452 15.5028 9.46156 15.562 9.31249 15.562C9.16343 15.562 9.02046 15.5028 8.91499 15.3975L4.22749 10.71C4.12216 10.6045 4.06299 10.4616 4.06299 10.3125C4.06299 10.1634 4.12216 10.0205 4.22749 9.915Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

// BACK TO TOP ARROW ICON 
export const BacktoTopArrowIcon = () => {
  return (
    <svg
      className=" animate-pulse"
      width="22"
      height="22"
      fill="white"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
      ></path>
      <path
        fillRule="evenodd"
        d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      ></path>
    </svg>
  );
}