import { useEffect, useState } from "react";
import userStyle from "./user.module.scss";
import { AddUser } from "./AddUser";
import {
  FcBusinessman,
  FcBusinesswoman,
  FcAddressBook,
  FcCellPhone,
  FcShop,
} from "react-icons/fc";
import { FaBirthdayCake } from "react-icons/fa";

export const User = ({ user }) => {
  console.log(user);
  const [showName, setShowName] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showCell, setShowCell] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [showCity, setShowCity] = useState(false);

  const nameShow = () => {
    setShowName(true);
    setShowEmail(false);
    setShowAge(false);
    setShowCell(false);
    setshowPassword(false);
    setShowCity(false);
  };
  const emailShow = () => {
    setShowName(false);
    setShowEmail(true);
    setShowAge(false);
    setShowCell(false);
    setshowPassword(false);
    setShowCity(false);
  };
  const ageShow = () => {
    setShowName(false);
    setShowEmail(false);
    setShowAge(true);
    setShowCell(false);
    setshowPassword(false);
    setShowCity(false);
  };
  const cellShow = () => {
    setShowName(false);
    setShowEmail(false);
    setShowAge(false);
    setShowCell(true);
    setshowPassword(false);
    setShowCity(false);
  };
  const passwordShow = () => {
    setShowName(false);
    setShowEmail(false);
    setShowAge(false);
    setShowCell(false);
    setshowPassword(true);
    setShowCity(false);
  };
  const cityShow = () => {
    setShowName(false);
    setShowEmail(false);
    setShowAge(false);
    setShowCell(false);
    setshowPassword(false);
    setShowCity(true);
  };

  return (
    <div className={userStyle.userContainer}>
      <div className={userStyle.userInfo}>
        <img className="rounded-circle m-4" src={user.picture.large} alt="" />
        <p className="m-3">Hi,</p>
        <h4 style={{ ...userStyle.userEmail, opacity: showName ? 1 : 0 }}>
          <p>My password is</p>
          {user?.name?.title + " " + user?.name?.first + " " + user?.name?.last}
        </h4>
        <h4 style={{ ...userStyle.userEmail, opacity: showEmail ? 1 : 0 }}>
          <p>My email is</p>
          {user.email}
        </h4>
        <h4 style={{ ...userStyle.userEmail, opacity: showAge ? 1 : 0 }}>
          <p>My age is</p>
          {user.dob.age}
        </h4>
        <h4 style={{ ...userStyle.userEmail, opacity: showCell ? 1 : 0 }}>
          <p>My phone is</p> {user?.cell}
        </h4>
        <h4 style={{ ...userStyle.userEmail, opacity: showPassword ? 1 : 0 }}>
          <p>My password is</p>
          {user?.login?.password}
        </h4>
        <h4 style={{ ...userStyle.userEmail, opacity: showCity ? 1 : 0 }}>
          <p>My city is</p>
          {user?.location?.city}
        </h4>
      </div>
      <div className="infoBtn text-center d-flex justify-content-center gap-4 mt-5">
        <button className={userStyle.userIcons} onMouseEnter={nameShow}>
          {user?.gender === "male" ? <FcBusinessman /> : <FcBusinesswoman />}
        </button>

        <button className={userStyle.userIcons} onMouseEnter={emailShow}>
          <FcAddressBook />
        </button>

        <button
          className={
            user?.gender === "male"
              ? `${userStyle.userIconsAge}`
              : `${userStyle.userIconAgeFemale}`
          }
          onMouseEnter={ageShow}
        >
          <FaBirthdayCake />
        </button>
        <button className={userStyle.userIcons} onMouseEnter={cellShow}>
          <FcCellPhone />
        </button>
        <button className={userStyle.userIcons} onMouseEnter={cityShow}>
          <FcShop />
        </button>
      </div>
    </div>
  );
};
