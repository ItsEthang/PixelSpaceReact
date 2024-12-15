import { Box, Grid } from "@radix-ui/themes";

const HomeGrid = () => {
  return (
    <Grid columns={{ initial: "1", md: "2" }}>
      <div className="hidden lg:flex">Aside</div>
      <Box>Main</Box>
    </Grid>
  );
};

export default HomeGrid;
