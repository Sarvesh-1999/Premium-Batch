import Button from "./Button";

const Nav = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div>Learn Context</div>
        <Button />
      </header>

      <hr />
    </div>
  );
};

export default Nav;
