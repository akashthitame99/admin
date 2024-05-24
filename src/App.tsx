import { SnackBarContextProvider } from "common/snackbar/SnackbarContext";
import AppRoutes from "components/layout/AppRoutes";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <SnackBarContextProvider>
        <AppRoutes />
      </SnackBarContextProvider>
    </React.Fragment>
  );
}

export default App;
