///////bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../actions/user";
import DropDown from "../SearchList";
/// icons
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";
import SearchList from "../SearchList";
import SearchResults from "../../pages/SearchResults";
///////////

const Header = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  let [drop, setDrop] = useState(null);
  const logout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.clear();
    navigate("/");
  };

  const searchUser = async (e) => {
    e.preventDefault();

    try {
      let res = await getUsers();
      if (res.data) {
        console.log("seacr", res.data);
        // setDrop(res.data);
        let a = res.data.filter((val) => {
          if (search === "") {
            return "No users";
          }
          if (val.userName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        });
        setDrop(a);

        // console.log("drop", drop, "aa", a);
        //  navigate("/searchresults");
        // .map((val, key) => {
        //   return <div>{val.userName}</div>;
        // });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  // console.log(drop);

  useEffect(() => {
    const timer = setTimeout(searchHandle, 800);
    return clearInterval(timer);
  }, [search]);

  const searchHandle = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {drop ? <SearchResults data={drop} /> : null}
      <div className="header">
        <Navbar variant="light">
          <Container className="d-flex justify-content-around align-items-center">
            <Link to="/home" className="navbar-brand">
              <img
                width="103px"
                height="29px"
                src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
                alt="Logo"
                className="op-07"
              />
            </Link>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <Form.Control
                type="search"
                placeholder="Search"
                className="border input-size search"
                aria-label="Search"
                value={search}
                onChange={searchHandle}
                onBlur={searchUser}
              />
              <BiSearch className="fs-4" />
            </div>

            <Nav className="d-flex">
              <Link to="/home" className="nav-link mr-5">
                <AiFillHome className="fs-3 dark " />
              </Link>
              <Link to="/create" className="nav-link mr-5">
                <MdOutlineAddBox className="fs-3 dark " />
              </Link>
              <Link to="/mypage" className="nav-link mr-5">
                <FaUser className="fs-4 dark" style={{ border: "none" }} />
              </Link>
              {auth && auth.token ? (
                <Link to="/" className="nav-link" onClick={logout}>
                  <RiLogoutBoxRLine className="fs-3 dark" />
                </Link>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/register" className="nav-link">
                    Regsiter
                  </Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
