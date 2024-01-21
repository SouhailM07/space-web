import "./galaxy.css";
// mui
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
// assets
import satelite_img from "/satelite1.jpg";
export default function Galaxy() {
  return (
    <>
      <article className="flex justify-between items-center">
        <section>
          <img src={satelite_img} alt="img" className="h-[22rem]" />
        </section>
        <Details />
      </article>
    </>
  );
}

let Details = () => {
  return (
    <Card
      component="section"
      sx={{ color: "white", bgcolor: "transparent", pb: "2rem" }}
      className="w-[45%] border-sky-800 border-b-2 border-r-2"
    >
      <Typography variant="h5" className="text-sky-800">
        OUR MISSION
      </Typography>
      <CardHeader
        sx={{ px: "0" }}
        title={<Typography variant="h2">RAPIDCAST</Typography>}
      />
      <CardContent sx={{ pl: "0", pr: "6rem" }}>
        <Typography variant="h6" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae
          reprehenderit expedita corporis, non doloremque. Consequatur
          consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eos molestiae reprehenderit expedita corporis, non
          doloremque. Consequatur consectetur quisquam qui sunt.
        </Typography>
      </CardContent>
      <CardActions sx={{ pl: "0" }}>
        <Button
          sx={{
            color: "white",
            px: "1.5rem",
            py: "0.8rem",
            fontSize: "1.2rem",
            textTransform: "capitalize",
          }}
          className="!bg-blue-500"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
