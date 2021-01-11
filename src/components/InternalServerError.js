import React from "react";

import { BigContainer, BlueButton } from "./styles/generalAssets";

function InternalServerError() {
  return (
    <BigContainer>
      <img
        src="https://www.wpexplorer.com/wp-content/uploads/wordpress-500-internal-server-error-fixes.jpg"
        alt="Internal Server Error"
      />

      <BlueButton onClick={() => window.location.reload()}>
        Reload the page
      </BlueButton>
    </BigContainer>
  );
}

export default InternalServerError;
