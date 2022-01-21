import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardHeader,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import React from "react";
import photo from "../../assets/default-image.jpeg";
const Setup = () => {
  return (
    <>
      <Card sx={{ width: 400 }}>
        <CardContent>
          <CardActionArea>
            <CardHeader
              title="hi there!"
              subheader="im  card, who are you?"
            ></CardHeader>
            <CardMedia
              component="img"
              image={photo}
              height={300}
              alt="could not laod"
            />
            <div style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet dui elit. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Curabitur eu dignissim leo. Nunc sit amet
              egestas metus. Nulla dictum, lorem non placerat convallis, nibh
              lorem accumsan felis, at congue enim erat vel est. In sed
            </div>
          </CardActionArea>
          <CardActions>
            <Button>order now!</Button>
            <Button>add to cart</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};
export default Setup;
