import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 345,
          transition: "transform 0.25s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardMedia
          component="img"
          alt={item.title}
          height="140"
          image={item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              fontSize: "1.2rem",
            }}
          >
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          {item.stock > 0 ? (
            <Link to={`/itemDetail/${item.id}`}>
              <Button size="small" variant="outlined">
                Mas detalles
              </Button>
            </Link>
          ) : (
            <Alert severity="error">Sin Stock!</Alert>
          )}
        </CardActions>
      </Card>
    </>
  );
};
export default ProductCard;
