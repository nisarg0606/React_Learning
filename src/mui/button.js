import { Button } from "@mui/material";

export const ButtonText = ({ value }) => {
  return <Button variant="text"> {value} </Button>;
};

export const ButtonOutlined = ({ value }) => {
  return <Button variant="outlined"> {value} </Button>;
};

export const ButtonContained = ({ value }) => {
  return <Button variant="contained"> {value} </Button>;
};

export const ButtonTextSmall = ({ value }) => {
  return (
    <Button variant="text" size="small">
      {value}
    </Button>
  );
};

export const ButtonTextMedium = ({ value }) => {
  return (
    <Button variant="text" size="medium">
      {value}
    </Button>
  );
};

export const ButtonTextLarge = ({ value }) => {
  return (
    <Button variant="text" size="large">
      {value}
    </Button>
  );
};

export const VuttonContainedSmall = ({ value }) => {
  return (
    <Button variant="contained" size="small">
      {value}
    </Button>
  );
};

export const ButtonContainedMedium = ({ value }) => {
  return (
    <Button variant="contained" size="medium">
      {value}
    </Button>
  );
};

export const ButtonContainedLarge = ({ value }) => {
  return (
    <Button variant="contained" size="large">
      {value}
    </Button>
  );
};

export const ButtonOutlinedSmall = ({ value }) => {
  return (
    <Button variant="outlined" size="small">
      {value}
    </Button>
  );
};

export const ButtonOutlinedMedium = ({ value }) => {
  return (
    <Button variant="outlined" size="medium">
      {" "}
      {value}{" "}
    </Button>
  );
};

export const ButtonOutlinedLarge = ({ value }) => {
  return (
    <Button variant="outlined" size="large">
      {" "}
      {value}{" "}
    </Button>
  );
};

export const ButtonContainedPrimary = ({ value }) => {
  return (
    <Button variant="contained" color="primary">
      {" "}
      {value}{" "}
    </Button>
  );
};

export const ButtonContainedSecondary = ({ value }) => {
  return (
    <Button variant="contained" color="secondary">
      {" "}
      {value}{" "}
    </Button>
  );
};

export const ButtonContainedError = ({ value }) => {
  return (
    <Button variant="contained" color="error">
      {" "}
      {value}{" "}
    </Button>
  );
};

export const ButtonContainedSuccess = ({ value }) => {
  return (
    <Button variant="contained" color="success">
      {" "}
      {value}{" "}
    </Button>
  );
};
