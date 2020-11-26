import React from "react";
import { useFormData } from "hooks/useFormData";
import { useHistory } from "react-router-dom";
import ImageView from "components/ImageView";
import ColorView from "components/ColorView";
import LayoutTwo from "layouts/LayoutTwo";
import LayoutOne from "layouts/LayoutOne";
import LayoutThree from "layouts/LayoutThree";

function OutputPage() {
  const history = useHistory();
  const formData = useFormData();
  const { date, message, theme } = formData.data;
  const isImage = theme.colorway && theme.colorway.name === "Image";

  if (!date || !message) {
    history.push("/");
    return null;
  }

  const Layout = () => {
    switch (theme.layout) {
      case 1:
        return <LayoutOne date={date} message={message} />;

      case 2:
        return <LayoutTwo date={date} message={message} />;

      case 3:
        return <LayoutThree date={date} message={message} />;

      default:
        return null;
    }
  };

  return isImage ? (
    <ImageView>
      <Layout />
    </ImageView>
  ) : (
    <ColorView colorway={theme.colorway!}>
      <Layout />
    </ColorView>
  );
}

export default OutputPage;
