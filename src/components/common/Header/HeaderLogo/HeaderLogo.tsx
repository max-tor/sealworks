import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import React from 'react';

export const HeaderLogo = () => {
  const breakpoints = useBreakpoint();
  const LogoWidth = breakpoints.sm ? 352 : 52;

  return (
    <Link to="index.html" aria-label="Go home" className="mt-2 sm:my-2">
      <svg width={LogoWidth} height="52.75" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(9.501 26.64)">
            <path
              d="M33.996 6.187c0 3.417-7.61 6.186-16.993 6.186S.009 9.603.009 6.187C.01 2.77 7.62 0 17.003 0s16.993 2.77 16.993 6.187Z"
              fill="#F8F8FC"
            />
            <path
              d="M33.411 6.187c0 3.36-7.478 6.082-16.7 6.082C7.487 12.269.008 9.547.008 6.187S7.488.105 16.71.105c9.223 0 16.701 2.722 16.701 6.082Z"
              fill="#EFF1F9"
            />
            <path
              d="M32.817 6.187c0 3.303-7.346 5.977-16.409 5.977C7.346 12.164 0 9.49 0 6.187 0 2.884 7.346.209 16.408.209c9.063 0 16.409 2.675 16.409 5.978Z"
              fill="#E4E8F2"
            />
            <path
              d="M32.232 6.187c0 3.236-7.214 5.863-16.116 5.863S.01 9.423.01 6.187C.01 2.95 7.224.324 16.116.324c8.893 0 16.116 2.627 16.116 5.863Z"
              fill="#D9DFEF"
            />
            <path
              d="M31.638 6.187c0 3.179-7.082 5.758-15.814 5.758C7.09 11.945.009 9.365.009 6.187.01 3.007 7.091.428 15.824.428c8.732 0 15.814 2.58 15.814 5.759Z"
              fill="#CED6EB"
            />
            <path
              d="M31.054 6.187c0 3.122-6.95 5.653-15.523 5.653C6.96 11.84.01 9.31.01 6.187.01 3.065 6.96.533 15.531.533c8.573 0 15.523 2.532 15.523 5.654Z"
              fill="#C4CDE8"
            />
            <path
              d="M30.46 6.187c0 3.065-6.819 5.549-15.23 5.549C6.818 11.736 0 9.252 0 6.186 0 3.123 6.818.639 15.23.639c8.411 0 15.23 2.484 15.23 5.549Z"
              fill="#B8C4E1"
            />
            <path
              d="M29.875 6.187c0 2.998-6.686 5.435-14.928 5.435S.019 9.185.019 6.187C.019 3.189 6.705.752 14.947.752s14.928 2.437 14.928 5.435Z"
              fill="#ADBBDD"
            />
            <path
              d="M29.28 6.187c0 2.94-6.553 5.33-14.635 5.33S.009 9.127.009 6.187c0-2.941 6.554-5.33 14.636-5.33 8.082 0 14.636 2.389 14.636 5.33Z"
              fill="#A4B3DA"
            />
            <path
              d="M28.696 6.187c0 2.884-6.422 5.225-14.343 5.225C6.43 11.412.009 9.071.009 6.187.01 3.303 6.431.96 14.353.96c7.921 0 14.343 2.342 14.343 5.226Z"
              fill="#99AAD7"
            />
            <path
              d="M28.102 6.187c0 2.827-6.29 5.111-14.051 5.111S0 9.004 0 6.187c0-2.818 6.29-5.121 14.05-5.121 7.762 0 14.052 2.294 14.052 5.12Z"
              fill="#8DA1D0"
            />
            <ellipse
              fill="#8298CE"
              fillRule="nonzero"
              cx="13.759"
              cy="6.187"
              rx="13.749"
              ry="5.007"
            />
            <path
              d="M26.923 6.187c0 2.703-6.026 4.902-13.457 4.902-7.43 0-13.457-2.2-13.457-4.902 0-2.703 6.026-4.902 13.457-4.902 7.431 0 13.457 2.199 13.457 4.902Z"
              fill="#788FC8"
            />
            <path
              d="M26.338 6.187c0 2.646-5.893 4.797-13.164 4.797-7.27 0-13.165-2.142-13.165-4.797C.01 3.53 5.903 1.39 13.174 1.39c7.27 0 13.164 2.141 13.164 4.797Z"
              fill="#6D87C4"
            />
            <path
              d="M25.754 6.187c0 2.589-5.762 4.683-12.872 4.683S.009 8.776.009 6.187c0-2.59 5.762-4.683 12.873-4.683 7.11 0 12.872 2.094 12.872 4.683Z"
              fill="#647EBE"
            />
            <path
              d="M25.16 6.187c0 2.532-5.63 4.578-12.58 4.578S.01 8.719.01 6.187c0-2.532 5.63-4.578 12.57-4.578s12.58 2.046 12.58 4.578Z"
              fill="#5975B9"
            />
            <path
              d="M24.566 6.187c0 2.465-5.498 4.473-12.278 4.473S.009 8.661.009 6.187c0-2.475 5.498-4.474 12.279-4.474 6.78 0 12.278 1.999 12.278 4.474Z"
              fill="#4F6CB3"
            />
            <path
              d="M23.98 6.187c0 2.408-5.365 4.369-11.985 4.369C5.375 10.556.01 8.604.01 6.186c0-2.417 5.366-4.368 11.986-4.368 6.62 0 11.986 1.951 11.986 4.369Z"
              fill="#4463AE"
            />
            <ellipse
              fill="#3A5BA9"
              fillRule="nonzero"
              cx="11.703"
              cy="6.187"
              rx="11.693"
              ry="4.255"
            />
            <path
              d="M22.802 6.187c0 2.294-5.102 4.15-11.4 4.15-6.3 0-11.393-1.856-11.393-4.15 0-2.294 5.102-4.15 11.392-4.15 6.29 0 11.401 1.856 11.401 4.15Z"
              fill="#3254A5"
            />
            <path
              d="M22.217 6.187c0 2.236-4.97 4.045-11.099 4.045-6.13 0-11.1-1.809-11.1-4.045 0-2.237 4.97-4.045 11.1-4.045s11.1 1.808 11.1 4.045Z"
              fill="#294CA0"
            />
            <path
              d="M21.623 6.187c0 2.17-4.837 3.93-10.807 3.93C4.847 10.118.01 8.358.01 6.188s4.838-3.94 10.807-3.94c5.97 0 10.807 1.76 10.807 3.94Z"
              fill="#1D459D"
            />
            <path
              d="M21.039 6.187c0 2.113-4.706 3.826-10.515 3.826S.01 8.3.01 6.187 4.715 2.36 10.524 2.36 21.04 4.074 21.04 6.187Z"
              fill="#223F96"
            />
            <path
              d="M20.445 6.187c0 2.056-4.574 3.721-10.223 3.721C4.574 9.908 0 8.243 0 6.187s4.574-3.722 10.222-3.722c5.649 0 10.223 1.666 10.223 3.722Z"
              fill="#002D9A"
            />
          </g>
          <path
            d="M26.174 2.075c-1.65-.6-1.783-.648-3-.924-1.574-.285-1.82-.323-3.186-.4-1.566 0-1.698 0-2.801.105-1.452.21-1.547.229-2.433.448-1.368.39-1.396.4-2.14.685l-.34.133c-.934.38-1.585 1.437-1.877 3.16a.457.457 0 0 1 .104-.038c.971-.38 1.848-.41 2.49-.152 4.215-3.589 9.147-4.664 13.183-3.027v.01ZM4.843 7.719c-.283.371-.66.875-.924 1.266-.708 1.123-.736 1.17-1.085 1.846-.613 1.276-.66 1.38-.971 2.237-.462 1.437-.528 1.628-.755 2.76C.863 17.39.807 17.713.76 19.217c.048-3.608 2.198-7.1 6.083-9.566.01-.79.396-1.656 1.009-2.427-1.509-.305-2.509-.114-2.999.495h-.01Zm7.185 28.925c1.556.6 1.84.705 3.348 1.066 1.575.286 1.82.324 3.188.4 1.565 0 1.697 0 2.8-.105 1.453-.21 1.537-.228 2.433-.447 1.368-.39 1.396-.4 2.141-.685l.141-.057c-1.65.656-4.073-.686-6.79-4.122-4.3-5.454-7.911-14.42-8.845-21.482-.019 0-.028.01-.047.019-.99.39-1.886.41-2.527.133-4.168 7.358-4.376 16.533-.066 21.996 1.197 1.523 2.63 2.608 4.215 3.294l.01-.01Zm21.558-5.339c.32-.42.745-.98 1.047-1.419.697-1.104.735-1.17 1.093-1.846.613-1.276.66-1.38.972-2.237.462-1.437.528-1.627.764-2.76.245-1.561.301-1.885.349-3.389v-.485c-.029-2.142-.793-4.312-2.367-6.301-4.3-5.454-13.26-7.843-21.36-6.092v.058c-.01.809-.405 1.694-1.046 2.484 6.025 3.284 13.428 9.432 17.728 14.896 2.792 3.54 3.687 6.044 2.82 7.1v-.01Z"
            fill="#F7D900"
          />
          <path d="M37.801 19.645c.038-9.252-5.97-15.134-11.118-17.352C19.695-.724 11.708.761 6.333 6.063c-2.377 2.35-3.574 4.806-3.97 5.758C1.127 14.724.835 16.799.759 19.217" />
          <path d="M.75 19.217c.057-4.55 3.46-8.928 9.477-11.27C4.211 10.29.807 14.667.75 19.217m0 0c.038 1.551.075 3.017.604 4.997.726 2.693 1.763 4.425 2.055 4.892.557.866 1.717 2.674 3.367 4.14 1.216 1.076 3.084 2.523 5.083 3.322.98.4 2.82 1.133 4.79 1.37 2.273.277 4.234.239 5.838-.104 1.735-.362 6.355-1.342 10.354-5.692 4.441-4.835 4.941-10.356 4.95-12.497" />
          <path
            d="M12.264 2.132c-.462.209-1.075.485-1.527.714-.73.406-1.27.726-1.622.96-.654.458-1.138.813-1.453 1.067-.896.77-.914.78-1.33 1.19-.83.856-.848.875-1.244 1.351l-.236.295c.377-.476.877.324 1.877.39.292.02.782-.951 1.122-.885a6.554 6.554 0 0 1 2.546-1.932c.094-.561 1.462-1.104 1.622-1.523.349-.866-.377-1.38.245-1.637v.01ZM37.801 19.16c-.085-1.714-.104-2.018-.377-3.513-.415-1.694-.5-2.046-1.15-3.683-.689-1.447-1.198-2.494-2.49-4.17-1.047-1.227-1.81-2.112-3.499-3.407-1.386-.951-1.754-1.208-3.602-2.103l-.519-.219c-2.942-1.19-8.308-1.18-11.58.428-1.216.6-.462 1.618-1.603 2.599.67.266 1.084.847 1.094 1.665 4.159-.894 8.044 2.865 11.91 4.008 3.659 1.075 7.356-.562 9.45 2.094 1.574 1.989 2.328 4.159 2.366 6.3ZM26.089 36.816a56.552 56.552 0 0 0 1.726-.79 25.67 25.67 0 0 0 1.622-.962c.97-.676 1.009-.704 1.452-1.066a35.2 35.2 0 0 0 1.33-1.19c.83-.856.848-.875 1.244-1.351l.123-.143c.858-1.056-.028-3.56-2.82-7.1-3.215-4.084-7.29-9.852-12.108-13.221-1.622-1.133-4.102-.838-5.63-1.666a6.438 6.438 0 0 1-2.565 1.904c.934 7.062 4.545 16.028 8.846 21.482 2.706 3.436 5.13 4.778 6.79 4.122l-.01-.02Z"
            fill="#F7D900"
          />
          <path
            d="M12.028 36.644c1.556.6 1.84.705 3.348 1.066 1.575.286 1.82.324 3.188.4 1.565 0 1.697 0 2.8-.105 1.453-.21 1.537-.228 2.433-.447 1.368-.39 1.396-.4 2.141-.685l.141-.057c-1.65.656-4.073-.686-6.79-4.122-4.3-5.454-7.911-14.42-8.845-21.482-.019 0-.028.01-.047.019-.99.39-1.886.41-2.527.133-4.168 7.358-4.376 16.533-.066 21.996 1.197 1.523 2.63 2.608 4.215 3.294l.01-.01Z"
            fill="#C00"
          />
          <path
            d="M.75 19.312c.047 1.751.075 2.712.613 4.902.51 1.675.613 2.017 1.348 3.597.877 1.59 1.028 1.885 2.066 3.256 1.046 1.227 1.81 2.113 3.489 3.407 1.386.952 1.754 1.209 3.602 2.104l.16.066c-1.584-.676-3.017-1.77-4.215-3.293-4.3-5.454-4.102-14.639.066-21.996-.66-.286-1.056-.866-1.056-1.695C2.919 12.145.769 15.676.741 19.302l.009.01Z"
            fill="#F7D900"
          />
          <path d="M37.801 19.645c.038-9.252-5.97-15.134-11.118-17.352C19.695-.724 11.708.761 6.333 6.063c-2.377 2.35-3.574 4.806-3.97 5.758C1.127 14.724.835 16.799.759 19.217c.057-4.55 3.461-8.928 9.478-11.27C4.22 10.29.816 14.667.759 19.217c.038 1.551.076 3.017.604 4.997.726 2.693 1.763 4.425 2.056 4.892.556.866 1.716 2.674 3.366 4.14 1.217 1.076 3.084 2.523 5.083 3.322.98.4 2.82 1.133 4.79 1.37 2.273.277 4.235.239 5.838-.104 1.735-.362 6.356-1.342 10.354-5.692 4.442-4.835 4.942-10.356 4.951-12.497Z" />
          <path d="M.75 19.217c.057-4.55 3.46-8.928 9.477-11.27C4.211 10.29.807 14.667.75 19.217" />
          <path
            d="M33.586 31.305c.32-.42.745-.98 1.047-1.419.697-1.104.735-1.17 1.093-1.846.613-1.276.66-1.38.972-2.237.462-1.437.528-1.627.764-2.76.245-1.561.301-1.885.349-3.389v-.485c-.029-2.142-.793-4.312-2.367-6.301-4.3-5.454-13.26-7.843-21.36-6.092v.058c-.01.809-.405 1.694-1.046 2.484 6.025 3.284 13.428 9.432 17.728 14.896 2.792 3.54 3.687 6.044 2.82 7.1v-.01ZM4.843 7.719c-.283.371-.66.875-.924 1.266-.708 1.123-.736 1.17-1.085 1.846-.613 1.276-.66 1.38-.971 2.237-.462 1.437-.528 1.628-.755 2.76C.863 17.39.807 17.713.76 19.217c.048-3.608 2.198-7.1 6.083-9.566.01-.79.396-1.656 1.009-2.427-1.509-.305-2.509-.114-2.999.495h-.01Zm21.331-5.644c-1.65-.6-1.783-.648-3-.924-1.574-.285-1.82-.323-3.186-.4-1.566 0-1.698 0-2.801.105-1.452.21-1.547.229-2.433.448-1.368.39-1.396.4-2.14.685l-.34.133c-.934.38-1.585 1.437-1.877 3.16a.457.457 0 0 1 .104-.038c.971-.38 1.848-.41 2.49-.152 4.215-3.589 9.147-4.664 13.183-3.027v.01Z"
            fill="#C00"
          />
          <path
            d="M37.801 19.645c.038-9.252-5.97-15.134-11.118-17.352C19.695-.724 11.708.761 6.333 6.063c-2.377 2.35-3.574 4.806-3.97 5.758C1.127 14.724.835 16.799.759 19.217m-.009 0c.038 1.551.075 3.017.604 4.997.726 2.693 1.763 4.425 2.055 4.892.557.866 1.717 2.674 3.367 4.14 1.216 1.076 3.084 2.523 5.083 3.322.98.4 2.82 1.133 4.79 1.37 2.273.277 4.234.239 5.838-.104 1.735-.362 6.355-1.342 10.354-5.692 4.441-4.835 4.941-10.356 4.95-12.497"
            stroke="#002D9A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m56.643 30.756 2.154-3.78c.362-.589 1.239-.503 1.553-.275.182.095 3.48 2.507 6.501 2.507 1.83 0 3.155-1.14 3.155-2.735 0-1.918-1.601-3.371-4.709-4.606-3.936-1.548-8.874-4.606-8.874-10.076 0-4.51 3.527-9.07 10.571-9.07 4.757 0 8.417 2.413 9.79 3.42.552.322.457 1.14.276 1.462l-2.335 3.514c-.325.503-1.144.911-1.554.589-.41-.228-3.756-2.735-6.539-2.735-1.65 0-2.879 1.092-2.879 2.326 0 1.69 1.373 2.963 4.986 4.426 3.564 1.415 9.245 4.197 9.245 10.389 0 4.691-4.07 9.44-10.8 9.44-5.947 0-9.245-2.46-10.294-3.514-.457-.456-.59-.636-.228-1.273l-.02-.01ZM82.636 4.042c0-.456.362-.864.867-.864h18.94c.505 0 .868.408.868.864v4.967a.863.863 0 0 1-.868.864H89.766v5.65h10.428c.457 0 .867.409.867.864v4.967c0 .504-.41.864-.867.864H89.766v6.154h12.677c.505 0 .868.409.868.864v4.967a.863.863 0 0 1-.868.864h-18.94a.863.863 0 0 1-.867-.864V4.023v.019ZM105.322 33.9l14.326-30.684c.134-.276.458-.504.782-.504h.458c.324 0 .638.228.781.504l14.327 30.683c.276.589-.096 1.187-.782 1.187h-5.08c-.82 0-1.192-.275-1.602-1.14l-1.649-3.599h-12.449l-1.649 3.647c-.228.551-.734 1.092-1.649 1.092h-5.032c-.687 0-1.049-.588-.782-1.187Zm18.806-9.754-3.479-7.521h-.047l-3.432 7.521h6.958Zm15.509-20.104c0-.456.362-.864.867-.864h5.443c.457 0 .867.408.867.864v24.34H157.7c.505 0 .867.408.867.864v4.967a.863.863 0 0 1-.867.864h-17.205a.863.863 0 0 1-.868-.864V4.033l.01.009Zm17.796.228c-.181-.637.18-1.092.82-1.092h5.356c.363 0 .734.323.82.636l3.937 15.45h.181l7.092-16.048a.865.865 0 0 1 .781-.504h.82c.41 0 .686.228.782.504l7.091 16.049h.182l3.936-15.451c.096-.323.458-.636.82-.636h5.357c.639 0 1.01.455.82 1.092l-8.646 30.636a.884.884 0 0 1-.82.636h-.733c-.325 0-.64-.228-.782-.503l-8.37-18.642h-.133l-8.33 18.642c-.134.275-.458.503-.782.503h-.734c-.362 0-.734-.275-.82-.636L157.433 4.27Zm56.696-1.558c9.15 0 16.47 7.341 16.47 16.458 0 9.117-7.32 16.363-16.47 16.363-9.151 0-16.424-7.246-16.424-16.363 0-9.117 7.273-16.458 16.424-16.458Zm0 25.537c5.032 0 9.15-4.103 9.15-9.07 0-4.966-4.118-9.164-9.15-9.164-5.033 0-9.103 4.15-9.103 9.164 0 5.015 4.117 9.07 9.103 9.07Zm21.179-24.207c0-.456.363-.864.868-.864h13.678c5.49 0 9.97 4.425 9.97 9.848 0 4.197-2.792 7.568-6.767 9.164l6.272 11.576c.324.59 0 1.32-.782 1.32h-6.081c-.362 0-.639-.228-.734-.408l-6.081-12.08h-3.156v11.624c0 .456-.41.864-.867.864h-5.443a.863.863 0 0 1-.867-.864V4.042h-.01Zm13.955 12.763c1.878 0 3.48-1.728 3.48-3.646 0-1.919-1.602-3.467-3.48-3.467h-6.768v7.113h6.768ZM265.048 4.27c0-.589.457-1.092 1.096-1.092h5.357c.591 0 1.096.503 1.096 1.092v11.984l10.161-12.63c.181-.228.591-.456.868-.456h5.766c.868 0 1.325 1.007.82 1.69L279.508 18.22l11.667 15.138c.505.684 0 1.69-.868 1.69h-6.31c-.324 0-.734-.18-.82-.323l-10.57-14.311v13.58c0 .589-.505 1.092-1.096 1.092h-5.357a1.082 1.082 0 0 1-1.097-1.092V4.27h-.009Zm28.042 26.486 2.155-3.78c.362-.589 1.24-.503 1.554-.275.18.095 3.479 2.507 6.5 2.507 1.83 0 3.156-1.14 3.156-2.735 0-1.918-1.602-3.371-4.71-4.606-3.936-1.548-8.873-4.606-8.873-10.076 0-4.51 3.526-9.07 10.57-9.07 4.757 0 8.417 2.413 9.79 3.42.553.322.457 1.14.276 1.462l-2.335 3.514c-.324.503-1.144.911-1.554.589-.41-.228-3.755-2.735-6.548-2.735-1.65 0-2.879 1.092-2.879 2.326 0 1.69 1.373 2.963 4.985 4.426 3.575 1.415 9.246 4.197 9.246 10.389 0 4.691-4.07 9.44-10.8 9.44-5.947 0-9.245-2.46-10.294-3.514-.457-.456-.59-.636-.229-1.273l-.01-.01Zm-71.612 9.724c0-.512.4-.92.896-.92.495 0 .924.398.924.92 0 .523-.4.893-.924.893a.876.876 0 0 1-.896-.893Zm.267 4.796c0-.19.171-.36.362-.36h.59c.191 0 .363.17.363.36v6.914c0 .19-.172.36-.362.36h-.591a.374.374 0 0 1-.362-.36v-6.914Zm3.841 0c0-.19.171-.36.362-.36h.362c.172 0 .267.075.305.227l.172.589s1.096-1.016 2.678-1.016c2.221 0 2.974 1.453 2.974 3.438v4.026c0 .19-.171.361-.362.361h-.61a.374.374 0 0 1-.362-.36v-4.027c0-1.453-.648-2.156-1.725-2.156-1.44 0-2.47 1.092-2.47 1.092v5.1c0 .19-.17.36-.361.36h-.591a.374.374 0 0 1-.363-.36v-6.914h-.01Zm9.618.779h-.982a.361.361 0 0 1-.362-.361v-.418a.35.35 0 0 1 .362-.36h.982v-2.118c0-.19.171-.361.362-.361l.61-.038c.19 0 .343.17.343.36v2.156h2.22a.35.35 0 0 1 .363.361v.418a.36.36 0 0 1-.362.36h-2.221v4.474c0 .76.19.921.63.921.476 0 1.152-.285 1.4-.418.286-.152.362-.038.458.114l.286.475c.133.228.076.342-.134.475-.267.17-1.306.646-2.202.646-1.534 0-1.763-.912-1.763-2.1v-4.586h.01Zm8.883-1.33c2.012 0 3.47 1.491 3.47 3.495 0 .133-.02.38-.038.513a.35.35 0 0 1-.343.323h-5.52c.077 1.282 1.211 2.478 2.565 2.478.8 0 1.458-.303 1.897-.57.267-.151.38-.246.533-.037.115.152.21.285.324.437.134.17.21.284-.076.493-.457.361-1.496.874-2.821.874-2.316 0-3.756-1.814-3.756-4.008 0-2.193 1.44-4.007 3.756-4.007l.01.01Zm2.145 3.258c-.057-1.111-.982-2.099-2.145-2.099-1.286 0-2.278.921-2.411 2.099h4.566-.01Zm3.318-2.707c0-.19.17-.36.361-.36h.363c.152 0 .285.094.324.265l.152.551s.705-1.016 2.297-1.016c.572 0 1.535.095 1.344.627l-.228.645c-.096.247-.267.247-.458.171a1.973 1.973 0 0 0-.743-.152c-1.459 0-2.088 1.074-2.088 1.074v5.1c0 .19-.172.36-.362.36h-.591a.374.374 0 0 1-.362-.36v-6.914l-.01.01Zm8.816 2.422c.82 0 1.63.247 1.63.247.02-1.415-.152-2.061-1.249-2.061a6.535 6.535 0 0 0-2.297.418c-.19.076-.305-.02-.362-.19l-.153-.475c-.076-.228.039-.342.21-.418.115-.057 1.23-.494 2.66-.494 1.954 0 2.43.998 2.43 3.23v4.235c0 .19-.171.36-.362.36h-.362c-.21 0-.267-.113-.324-.284l-.153-.513c-.4.399-1.191.997-2.373.997-1.344 0-2.355-.969-2.355-2.498 0-1.529 1.097-2.535 3.07-2.535l-.01-.02Zm-.496 3.893c.963 0 1.783-.588 2.107-1.073v-1.51c-.229-.133-.763-.304-1.61-.304-1.078 0-1.84.532-1.84 1.53 0 .76.514 1.357 1.343 1.357Zm9.285-6.866c1.153 0 2.049.456 2.745 1.34.133.17.095.398-.077.531l-.362.304c-.286.266-.381.076-.553-.076a2.377 2.377 0 0 0-1.763-.798c-1.44 0-2.545 1.188-2.545 2.716 0 1.53 1.096 2.754 2.526 2.754 1.153 0 1.592-.57 2.03-.997.229-.228.362-.19.572-.038l.21.152c.19.133.248.342.133.532a3.45 3.45 0 0 1-2.936 1.605c-2.125 0-3.927-1.7-3.927-3.989 0-2.288 1.859-4.026 3.947-4.026v-.01Zm5.557 1.33h-.982a.361.361 0 0 1-.362-.361v-.418a.35.35 0 0 1 .362-.36h.982v-2.118c0-.19.171-.361.362-.361l.61-.038c.19 0 .343.17.343.36v2.156h2.22a.35.35 0 0 1 .363.361v.418a.36.36 0 0 1-.362.36h-2.221v4.474c0 .76.19.921.63.921.476 0 1.152-.285 1.4-.418.286-.152.363-.038.458.114l.286.475c.133.228.076.342-.134.475-.267.17-1.306.646-2.202.646-1.534 0-1.763-.912-1.763-2.1v-4.586h.01Zm5.538-5.575c0-.512.4-.92.896-.92.495 0 .924.398.924.92 0 .523-.4.893-.924.893a.876.876 0 0 1-.896-.893Zm.267 4.796c0-.19.171-.36.362-.36h.59c.191 0 .363.17.363.36v6.914c0 .19-.172.36-.362.36h-.591a.374.374 0 0 1-.362-.36v-6.914Zm2.869.076c-.115-.247 0-.437.286-.437h.59a.37.37 0 0 1 .344.21l2.373 5.46h.02l2.525-5.46a.363.363 0 0 1 .324-.21h.496c.286 0 .4.19.286.437l-3.28 7.199c-.037.095-.152.19-.323.19h-.096c-.171 0-.285-.095-.324-.19l-3.24-7.199h.019Zm11.829-.627c2.01 0 3.47 1.491 3.47 3.495 0 .133-.02.38-.039.513a.35.35 0 0 1-.343.323h-5.519c.076 1.282 1.21 2.478 2.564 2.478.8 0 1.459-.303 1.897-.57.267-.151.381-.246.534-.037.114.152.21.285.324.437.133.17.21.284-.076.493-.458.361-1.497.874-2.822.874-2.316 0-3.755-1.814-3.755-4.008 0-2.193 1.439-4.007 3.755-4.007l.01.01Zm2.144 3.258c-.057-1.111-.981-2.099-2.144-2.099-1.287 0-2.278.921-2.412 2.099h4.566-.01Zm7.207 3.494c.076-.113.21-.38.266-.474.096-.152.305-.19.515-.057 0 0 .82.664 1.802.664.781 0 1.248-.398 1.248-.92 0-.665-.572-.979-1.687-1.53-1.02-.494-2.183-1.168-2.183-2.46 0-.797.649-1.984 2.431-1.984 1 0 1.763.342 2.126.589.171.114.228.38.114.588l-.152.304a.42.42 0 0 1-.553.171s-.82-.456-1.535-.456c-.858 0-1.096.437-1.096.76 0 .627.629.921 1.42 1.301 1.325.627 2.507 1.225 2.507 2.593 0 1.11-1.077 2.156-2.64 2.156a3.884 3.884 0 0 1-2.488-.855.376.376 0 0 1-.095-.399v.01Zm7.615-5.422h-.981a.361.361 0 0 1-.363-.361v-.418a.35.35 0 0 1 .363-.36h.981v-2.118c0-.19.172-.361.363-.361l.61-.038c.19 0 .343.17.343.36v2.156h2.22a.35.35 0 0 1 .363.361v.418a.36.36 0 0 1-.362.36h-2.221v4.474c0 .76.19.921.629.921.477 0 1.153-.285 1.401-.418.286-.152.362-.038.458.114l.286.475c.133.228.076.342-.134.475-.267.17-1.306.646-2.202.646-1.534 0-1.763-.912-1.763-2.1v-4.586h.01Zm5.634-.779c0-.19.171-.36.362-.36h.61c.19 0 .362.17.362.36v4.027c0 1.453.648 2.155 1.726 2.155 1.458 0 2.278-1.092 2.278-1.092v-5.1c0-.19.171-.36.362-.36h.59c.192 0 .363.17.363.36v6.914c0 .19-.171.361-.362.361h-.362c-.21 0-.286-.133-.343-.323l-.134-.494s-.896 1.017-2.488 1.017c-2.22 0-2.974-1.434-2.974-3.457v-4.008h.01Zm12.41-.551c1.268 0 2.05.494 2.05.494v-5.67c0-.19.171-.36.362-.36h.59c.192 0 .363.17.363.36v12.64c0 .19-.171.362-.362.362h-.4c-.172 0-.286-.133-.324-.304l-.115-.513s-.915 1.016-2.354 1.016c-1.954 0-3.489-1.833-3.489-4.027 0-2.193 1.382-3.988 3.68-3.988v-.01Zm-.057 6.81c1.382 0 2.088-1.264 2.088-1.264v-3.817s-.801-.456-1.859-.456c-1.668 0-2.507 1.206-2.507 2.735s.877 2.811 2.278 2.811v-.01Zm5.7-11.055c0-.512.4-.92.896-.92s.915.398.915.92c0 .523-.4.893-.915.893a.881.881 0 0 1-.896-.893Zm.267 4.796c0-.19.172-.36.362-.36h.591c.191 0 .363.17.363.36v6.914c0 .19-.172.36-.363.36h-.59a.374.374 0 0 1-.363-.36v-6.914Zm7.101-.551c2.126 0 3.813 1.833 3.813 3.989 0 2.156-1.687 4.027-3.813 4.027-2.125 0-3.812-1.833-3.812-4.027s1.687-3.989 3.812-3.989Zm0 6.771c1.402 0 2.488-1.244 2.488-2.792 0-1.547-1.096-2.725-2.488-2.725-1.391 0-2.487 1.225-2.487 2.725s1.096 2.792 2.487 2.792Zm5.281-.019c.076-.113.21-.38.267-.474.095-.152.305-.19.515-.057 0 0 .82.664 1.801.664.782 0 1.249-.398 1.249-.92 0-.665-.572-.979-1.687-1.53-1.02-.494-2.183-1.168-2.183-2.46 0-.797.648-1.984 2.43-1.984 1.001 0 1.764.342 2.126.589.172.114.229.38.115.588l-.153.304a.42.42 0 0 1-.553.171s-.82-.456-1.534-.456c-.858 0-1.097.437-1.097.76 0 .627.63.921 1.42 1.301 1.326.627 2.508 1.225 2.508 2.593 0 1.11-1.078 2.156-2.64 2.156a3.884 3.884 0 0 1-2.489-.855.378.378 0 0 1-.095-.399v.01Z"
            fill="#002D9A"
            fillRule="nonzero"
          />
        </g>
      </svg>
      <span className="hidden">Go home</span>
    </Link>
  );
};
