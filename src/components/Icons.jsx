import React from "react";

// Inline SVG components to replace heavy Remixicon font library
export const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
  </svg>
);

export const ArrowUpIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414z"/>
  </svg>
);

export const FileListIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v6a3 3 0 0 1-3 3zm-1-5H4v2a1 1 0 0 0 1 1h13v-3zm0-2V4H4v9h14v2zm2 2v3a1 1 0 0 0 1-1v-2h-1zM6 7h8v2H6V7zm0 4h8v2H6v-2z"/>
  </svg>
);

export const RouteIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 15V9h8v2.414l3.707-3.707a1 1 0 0 0 0-1.414L12 2.586V5H2v10h2zm16 4h2v2h-2v-2zm-4-4h8v2h-8v-2zm0 8h8v2h-8v-2zM4 19h10v2H4v-2z"/>
  </svg>
);

export const CheckboxCircleIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"/>
  </svg>
);

export const CheckboxCircleFillIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.003 14l-3.535-3.536 1.414-1.414 2.12 2.121 5.657-5.657 1.414 1.414L10.997 16z"/>
  </svg>
);

export const GlobalIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2-2.154A8.006 8.006 0 0 1 4.154 12H10v7.846zm2 0V12h5.846A8.006 8.006 0 0 1 12 19.846zM18.846 10H12V4.154a8.006 8.006 0 0 1 6.846 5.846zm-8.846 0H4.154A8.006 8.006 0 0 1 10 4.154V10z"/>
  </svg>
);

export const EyeIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.877-3.88-10.819-9C2.122 6.88 6.608 3 12 3zm0 16a7.006 7.006 0 0 0 6.78-5.18 7.006 7.006 0 0 0-13.56 0A7.006 7.006 0 0 0 12 19zm0-3a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
  </svg>
);

export const CustomerService2Icon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2c5.523 0 10 4.477 10 10v3a4 4 0 0 1-4 4h-1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2H7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2a4 4 0 0 1-4-4v-3C2 6.477 6.477 2 12 2zm8 10c0-4.08-3.046-7.441-7-7.93V7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4.07C5.046 4.559 2 7.92 2 12v3h2v-3a8 8 0 0 1 16 0v3h2v-3z"/>
  </svg>
);

export const StarIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 18.26l-7.053 3.708 1.347-7.854-5.707-5.563 7.887-1.146L12 2l3.526 7.143 7.887 1.146-5.707 5.563 1.347 7.854z"/>
  </svg>
);

export const TruckIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1.066-12l.4-2h9.068l.4 2H18.5a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1h-1.077a3 3 0 0 1-5.846 0H9.423a3 3 0 0 1-5.846 0H2.5a1 1 0 0 1-1-1v-4a5 5 0 0 1 5-5h1.566zM19 13v-3a1 1 0 0 0-1-1h-1.5v4H19zm-4.5-4h-7a3 3 0 0 0-3 3v1h10V9z"/>
  </svg>
);

export const CalendarTodoIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-7 2v3h3v-3h-3zM9 5H4v4h16V5H15v2h-2V5H9v2H7V5z"/>
  </svg>
);

export const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 20.9l-4.9-4.9c-2.8-2.8-2.8-7.4 0-10.2 2.8-2.8 7.4-2.8 10.2 0 2.8 2.8 2.8 7.4 0 10.2l-5.3 4.9zm0-11.9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
  </svg>
);

export const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 4.955L4 7.215V19h16V7.238zM18.885 5H5.115L12 9.303 18.885 5z"/>
  </svg>
);

export const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 16.44v3.56a1 1 0 0 1-1 1c-9.39 0-17-7.61-17-17a1 1 0 0 1 1-1h3.56a1 1 0 0 1 .98.8l.56 2.8a1 1 0 0 1-.27.9L6.62 9.78a13.9 13.9 0 0 0 5.6 5.6l2.28-2.28a1 1 0 0 1 .9-.27l2.8.56a1 1 0 0 1 .8.98z"/>
  </svg>
);

export const NavigationIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l9 20-9-4-9 4z"/>
  </svg>
);

export const CalendarIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 6V5H4v4h16zm0 2H4v8h16v-8z"/>
  </svg>
);

export const TimeIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/>
  </svg>
);

export const CompassIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1.414-9.414l4.242-1.414-1.414 4.242-4.242 1.414 1.414-4.242z"/>
  </svg>
);

export const ShieldCheckIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.293-6.707l4.586-4.586-1.414-1.414-3.172 3.172-1.586-1.586-1.414 1.414 3 3z"/>
  </svg>
);

export const PulseIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-12.414l-2.293 2.293-1.414-1.414L11 6.757l3.707 3.707-1.414 1.414L12 10.586zm0 3.828l2.293-2.293 1.414 1.414L12 17.243l-3.707-3.707 1.414-1.414L11 14.414z"/>
  </svg>
);

export const LightbulbIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3zm6.34-8.868L19 14.5v2.5H5v-2.5l.66-.368A6.974 6.974 0 0 1 9 8.07V6a3 3 0 0 1 6 0v2.07c1.37.58 2.508 1.582 3.34 3.062z"/>
  </svg>
);

export const UserHeartIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 4.5l-1.45-1.32C5.4 10.68 2 7.6 2 3.8 2 1.7 3.7 0 5.8 0 7 0 8.16.56 9 1.44 9.84.56 11 0 12.2 0 14.3 0 16 1.7 16 3.8c0 3.8-3.4 6.88-8.55 11.38L12 16.5z"/>
  </svg>
);

export const ErrorWarningIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
  </svg>
);
