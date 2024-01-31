import Typography from "../../components/common/Typography";

const HomePage = () => {
  return (
    <div className={`underline bg-vert-naturaliste p-8`}>
      <Typography tag="h2" variant="vert-naturaliste">
        Page accueil
      </Typography>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>{" "}
    </div>
  );
};

export default HomePage;