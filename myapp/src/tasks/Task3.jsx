import { useState } from "react";
import axios from "axios";

const Task3 = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userdata = {
      firstname,
      lastname,
      dob,
      country,
      gender,
    };

    console.log(userdata);

    let resp = await axios.post("http://localhost:5000/users", userdata);
    console.log(resp);

    setFirstname("");
    setLastname("");
    setDob("");
    setGender("");
    setCountry("");
  };

  return (
    <div>
      <h1>Task3 - Forms Task</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          placeholder="Firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="" selected disabled>
            Select here
          </option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="russia">Russia</option>
        </select>
        <br />
        <br />
        <label htmlFor="gender">Gender </label>
        male
        <input
          type="radio"
          name="gender"
          value={"male"}
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        female
        <input
          type="radio"
          name="gender"
          value={"female"}
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Task3;
