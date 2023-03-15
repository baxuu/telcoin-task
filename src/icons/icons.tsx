import React from 'react';

const icons = {
  ArrowLeft: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  ),
  ArrowRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  ),
  Cross: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  Hamburger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  Logo: (
    <svg
      width="125"
      height="41"
      viewBox="0 0 125 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.6915 25.7657C53.2647 25.7657 52.9885 25.9916 52.1851 25.9916C51.5574 25.9916 50.5531 25.9665 50.5531 24.4856V16.9052H53.3902C53.9426 16.9052 54.3694 16.4785 54.3694 15.9263C54.3694 15.374 53.9426 14.9473 53.3902 14.9473H50.5531V12.9393C50.5531 12.6632 50.3522 12.4373 50.0761 12.4373C49.8752 12.4373 49.7246 12.5879 49.6492 12.6632L46.2346 16.0016C46.084 16.1271 46.0087 16.2777 46.0087 16.4283C46.0087 16.7044 46.2095 16.9052 46.4857 16.9052H48.2683V24.6864C48.2683 27.7989 50.754 27.9997 51.934 27.9997C52.7374 27.9997 53.4153 27.824 54.0179 27.5479C54.3694 27.3722 54.5954 27.0961 54.5954 26.6693C54.5954 26.1422 54.1435 25.7657 53.6915 25.7657ZM66.9446 24.9876C67.4719 24.9876 67.9489 25.3892 67.9489 25.9665C67.9489 26.3681 67.6476 26.6944 67.2961 26.8952C66.1914 27.5228 65.0867 27.9997 62.9023 27.9997C58.8098 27.9997 56.3995 25.5649 56.3995 21.348C56.3995 17.9594 58.2324 14.6963 62.4002 14.6963C66.2667 14.6963 68.3757 17.6833 68.3757 21.0217C68.3757 21.6492 67.9238 22.1512 67.2208 22.1512H58.7094C58.9605 24.4103 60.3916 25.8661 63.1032 25.8661C64.6096 25.8661 65.5637 25.5649 66.4927 25.088C66.6433 25.0127 66.7689 24.9876 66.9446 24.9876ZM62.4002 16.6291C60.7933 16.6291 58.8601 17.6833 58.7094 20.2938H66.1161C65.9654 17.6833 64.0071 16.6291 62.4002 16.6291ZM72.8664 9.29968C72.2387 9.29968 71.7365 9.8017 71.7365 10.4543V26.7446C71.7365 27.3722 72.2387 27.8742 72.8664 27.8742C73.5192 27.8742 74.0213 27.3722 74.0213 26.7446V10.4543C74.0213 9.8017 73.5192 9.29968 72.8664 9.29968ZM87.7766 24.9123C87.5757 24.9123 87.4502 24.9374 87.2242 25.0629C86.3455 25.5147 85.6424 25.8661 84.3369 25.8661C81.4244 25.8661 79.7171 24.0338 79.7171 21.348C79.7171 18.6622 81.4244 16.8299 84.3369 16.8299C85.6424 16.8299 86.3455 17.1813 87.2242 17.6331C87.4502 17.7586 87.5757 17.7837 87.7766 17.7837C88.3038 17.7837 88.7306 17.2566 88.7306 16.7797C88.7306 16.4032 88.5298 16.102 88.2285 15.9012C87.3749 15.3489 86.1195 14.6963 84.136 14.6963C80.5708 14.6963 77.4323 17.1562 77.4323 21.348C77.4323 25.5398 80.5708 27.9997 84.136 27.9997C86.1195 27.9997 87.3749 27.3471 88.2285 26.7948C88.5298 26.594 88.7306 26.2928 88.7306 25.9163C88.7306 25.4394 88.3038 24.9123 87.7766 24.9123ZM97.3389 14.6963C101.205 14.6963 103.766 17.3821 103.766 21.348C103.766 25.3139 101.205 27.9997 97.3389 27.9997C93.4472 27.9997 90.9114 25.3139 90.9114 21.348C90.9114 17.3821 93.4472 14.6963 97.3389 14.6963ZM97.3389 25.9163C99.247 25.9163 101.482 24.6613 101.482 21.3229C101.482 18.0096 99.247 16.7797 97.3389 16.7797C95.4056 16.7797 93.1962 18.0096 93.1962 21.3229C93.1962 24.6613 95.4056 25.9163 97.3389 25.9163ZM108.257 14.8218C107.629 14.8218 107.127 15.3238 107.127 15.9765V26.7446C107.127 27.3722 107.629 27.8742 108.257 27.8742C108.91 27.8742 109.412 27.3722 109.412 26.7446V15.9765C109.412 15.3238 108.91 14.8218 108.257 14.8218ZM109.638 10.9563C109.638 10.2535 109.06 9.67619 108.357 9.67619H108.207C107.504 9.67619 106.926 10.2535 106.926 10.9563V11.0567C106.926 11.7595 107.504 12.3369 108.207 12.3369H108.357C109.06 12.3369 109.638 11.7595 109.638 11.0567V10.9563ZM120.506 14.6963C118.271 14.6963 116.89 15.851 115.836 17.0056V15.9765C115.836 15.3238 115.309 14.8218 114.681 14.8218C114.053 14.8218 113.551 15.3238 113.551 15.9765V26.7446C113.551 27.3722 114.053 27.8742 114.681 27.8742C115.309 27.8742 115.836 27.3722 115.836 26.7446V19.2144C116.84 17.9594 118.146 16.8048 119.953 16.8048C121.912 16.8048 122.715 17.9594 122.715 19.8671V26.7446C122.715 27.3722 123.217 27.8742 123.845 27.8742C124.473 27.8742 125 27.3722 125 26.7446V19.6161C125 16.9303 123.368 14.6963 120.506 14.6963Z"
        fill="#4A4A4A"
      />
      <path
        d="M53.6915 25.7657C53.2647 25.7657 52.9885 25.9916 52.1851 25.9916C51.5574 25.9916 50.5531 25.9665 50.5531 24.4856V16.9052H53.3902C53.9426 16.9052 54.3694 16.4785 54.3694 15.9263C54.3694 15.374 53.9426 14.9473 53.3902 14.9473H50.5531V12.9393C50.5531 12.6632 50.3522 12.4373 50.0761 12.4373C49.8752 12.4373 49.7246 12.5879 49.6492 12.6632L46.2346 16.0016C46.084 16.1271 46.0087 16.2777 46.0087 16.4283C46.0087 16.7044 46.2095 16.9052 46.4857 16.9052H48.2683V24.6864C48.2683 27.7989 50.754 27.9997 51.934 27.9997C52.7374 27.9997 53.4153 27.824 54.0179 27.5479C54.3694 27.3722 54.5954 27.0961 54.5954 26.6693C54.5954 26.1422 54.1435 25.7657 53.6915 25.7657ZM66.9446 24.9876C67.4719 24.9876 67.9489 25.3892 67.9489 25.9665C67.9489 26.3681 67.6476 26.6944 67.2961 26.8952C66.1914 27.5228 65.0867 27.9997 62.9023 27.9997C58.8098 27.9997 56.3995 25.5649 56.3995 21.348C56.3995 17.9594 58.2324 14.6963 62.4002 14.6963C66.2667 14.6963 68.3757 17.6833 68.3757 21.0217C68.3757 21.6492 67.9238 22.1512 67.2208 22.1512H58.7094C58.9605 24.4103 60.3916 25.8661 63.1032 25.8661C64.6096 25.8661 65.5637 25.5649 66.4927 25.088C66.6433 25.0127 66.7689 24.9876 66.9446 24.9876ZM62.4002 16.6291C60.7933 16.6291 58.8601 17.6833 58.7094 20.2938H66.1161C65.9654 17.6833 64.0071 16.6291 62.4002 16.6291ZM72.8664 9.29968C72.2387 9.29968 71.7365 9.8017 71.7365 10.4543V26.7446C71.7365 27.3722 72.2387 27.8742 72.8664 27.8742C73.5192 27.8742 74.0213 27.3722 74.0213 26.7446V10.4543C74.0213 9.8017 73.5192 9.29968 72.8664 9.29968ZM87.7766 24.9123C87.5757 24.9123 87.4502 24.9374 87.2242 25.0629C86.3455 25.5147 85.6424 25.8661 84.3369 25.8661C81.4244 25.8661 79.7171 24.0338 79.7171 21.348C79.7171 18.6622 81.4244 16.8299 84.3369 16.8299C85.6424 16.8299 86.3455 17.1813 87.2242 17.6331C87.4502 17.7586 87.5757 17.7837 87.7766 17.7837C88.3038 17.7837 88.7306 17.2566 88.7306 16.7797C88.7306 16.4032 88.5298 16.102 88.2285 15.9012C87.3749 15.3489 86.1195 14.6963 84.136 14.6963C80.5708 14.6963 77.4323 17.1562 77.4323 21.348C77.4323 25.5398 80.5708 27.9997 84.136 27.9997C86.1195 27.9997 87.3749 27.3471 88.2285 26.7948C88.5298 26.594 88.7306 26.2928 88.7306 25.9163C88.7306 25.4394 88.3038 24.9123 87.7766 24.9123ZM97.3389 14.6963C101.205 14.6963 103.766 17.3821 103.766 21.348C103.766 25.3139 101.205 27.9997 97.3389 27.9997C93.4472 27.9997 90.9114 25.3139 90.9114 21.348C90.9114 17.3821 93.4472 14.6963 97.3389 14.6963ZM97.3389 25.9163C99.247 25.9163 101.482 24.6613 101.482 21.3229C101.482 18.0096 99.247 16.7797 97.3389 16.7797C95.4056 16.7797 93.1962 18.0096 93.1962 21.3229C93.1962 24.6613 95.4056 25.9163 97.3389 25.9163ZM108.257 14.8218C107.629 14.8218 107.127 15.3238 107.127 15.9765V26.7446C107.127 27.3722 107.629 27.8742 108.257 27.8742C108.91 27.8742 109.412 27.3722 109.412 26.7446V15.9765C109.412 15.3238 108.91 14.8218 108.257 14.8218ZM109.638 10.9563C109.638 10.2535 109.06 9.67619 108.357 9.67619H108.207C107.504 9.67619 106.926 10.2535 106.926 10.9563V11.0567C106.926 11.7595 107.504 12.3369 108.207 12.3369H108.357C109.06 12.3369 109.638 11.7595 109.638 11.0567V10.9563ZM120.506 14.6963C118.271 14.6963 116.89 15.851 115.836 17.0056V15.9765C115.836 15.3238 115.309 14.8218 114.681 14.8218C114.053 14.8218 113.551 15.3238 113.551 15.9765V26.7446C113.551 27.3722 114.053 27.8742 114.681 27.8742C115.309 27.8742 115.836 27.3722 115.836 26.7446V19.2144C116.84 17.9594 118.146 16.8048 119.953 16.8048C121.912 16.8048 122.715 17.9594 122.715 19.8671V26.7446C122.715 27.3722 123.217 27.8742 123.845 27.8742C124.473 27.8742 125 27.3722 125 26.7446V19.6161C125 16.9303 123.368 14.6963 120.506 14.6963Z"
        fill="#4A4A4A"
      />
      <circle cx="18.2547" cy="20.0801" r="10.9528" fill="white" />
      <path
        d="M34.4697 12.3263C35.551 13.2262 36.2331 15.0884 35.9948 16.4612L33.6676 29.6592C33.425 31.035 32.1442 32.5474 30.8239 33.0238L18.1476 37.5947C16.8273 38.0711 14.8637 37.7249 13.786 36.8256L3.43749 28.1949C2.35621 27.295 1.67346 25.4363 1.91604 24.0606L4.2432 10.8626C4.48579 9.48683 5.76664 7.97443 7.08692 7.49796L19.7626 2.9307C21.0829 2.45424 23.0465 2.80048 24.1242 3.69977L34.4697 12.3263ZM23.6863 18.2519L24.2026 15.5703L19.3624 15.5779L20.0517 12.0413L18.484 12.0413C18.484 12.0413 17.0187 14.6621 13.7879 15.9451L13.3425 18.2578L15.4592 18.262C15.4592 18.262 14.7427 21.5857 14.5065 22.8118C13.9055 25.9327 15.4094 28.1472 17.7216 28.1472C18.8816 28.1472 20.1843 28.1472 21.6297 28.1472L22.315 25.1829C22.1483 25.1829 21.0587 25.1829 19.046 25.1829C17.5931 25.1829 17.6695 24.3687 17.9486 22.9197L18.8478 18.2503L23.6863 18.2519Z"
        fill="#14C8FF"
      />
    </svg>
  ),
};

export default icons;