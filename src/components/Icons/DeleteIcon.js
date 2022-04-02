const DeleteIcon = (props) => {
  return (
    <svg
      width="auto"
      height="2.8vh"
      viewBox="0 0 24 24"
      fill="none"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      value={props.value}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7 5.37879C13.7 4.92069 13.5209 4.48135 13.2021 4.15742C12.8833 3.8335 12.4509 3.65152 12 3.65152C11.5491 3.65152 11.1167 3.8335 10.7979 4.15742C10.4791 4.48135 10.3 4.92069 10.3 5.37879H9.16667C9.16667 4.61529 9.46518 3.88305 9.99653 3.34318C10.5279 2.8033 11.2486 2.5 12 2.5C12.7514 2.5 13.4721 2.8033 14.0035 3.34318C14.5348 3.88305 14.8333 4.61529 14.8333 5.37879H19.9333C20.0836 5.37879 20.2278 5.43945 20.334 5.54742C20.4403 5.6554 20.5 5.80184 20.5 5.95455C20.5 6.10725 20.4403 6.25369 20.334 6.36167C20.2278 6.46964 20.0836 6.5303 19.9333 6.5303H19.3055L17.8367 19.4618C17.7727 20.0231 17.5079 20.5408 17.0927 20.9167C16.6775 21.2925 16.1408 21.5001 15.5847 21.5H8.41527C7.85919 21.5001 7.3225 21.2925 6.90727 20.9167C6.49205 20.5408 6.22728 20.0231 6.16333 19.4618L4.6934 6.5303H4.06667C3.93404 6.53035 3.80559 6.48312 3.70371 6.39685C3.60182 6.31059 3.53294 6.19074 3.50907 6.05818L3.5 5.95455C3.5 5.80184 3.5597 5.6554 3.66597 5.54742C3.77224 5.43945 3.91638 5.37879 4.06667 5.37879H13.7ZM18.1631 6.5303H5.8358L7.28873 19.3294C7.32072 19.6101 7.45319 19.8691 7.66092 20.057C7.86865 20.2449 8.13713 20.3487 8.41527 20.3485H15.5847C15.8627 20.3484 16.1309 20.2445 16.3384 20.0566C16.5459 19.8687 16.6782 19.6099 16.7101 19.3294L18.1631 6.5303ZM10.3 9.40909C10.5777 9.40909 10.81 9.58758 10.8576 9.82248L10.8667 9.91345V16.9665C10.8667 17.244 10.6128 17.4697 10.3 17.4697C10.0223 17.4697 9.79 17.2912 9.7424 17.0563L9.73333 16.9653V9.91461C9.73333 9.63594 9.9872 9.41024 10.3 9.41024V9.40909ZM13.7 9.40909C13.9777 9.40909 14.21 9.58758 14.2576 9.82248L14.2667 9.91345V16.9665C14.2667 17.244 14.0128 17.4697 13.7 17.4697C13.4223 17.4697 13.19 17.2912 13.1424 17.0563L13.1333 16.9653V9.91461C13.1333 9.63594 13.3872 9.41024 13.7 9.41024V9.40909Z"
        fill="#FC7676"
        stroke="#FC7676"
      />
    </svg>
  );
};

export default DeleteIcon;
