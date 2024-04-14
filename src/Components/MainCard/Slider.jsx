import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";

const Slider = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data?.land_media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data?.land_media.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card style={styles.card}>
      <div style={styles.sliderContainer}>
        <div style={styles.iconContainer}>
          <div style={styles.iconRight}>
            <PiShareFat />
          </div>
          <div style={styles.icon}>
            <FaRegHeart />
          </div>
        </div>
        <div style={styles.arrowButtonLeft} onClick={prevImage}>
          <MdKeyboardArrowLeft />
        </div>
        <CardMedia
          component="img"
          sx={{ height: 300 }}
          image={
            data?.land_media[currentImageIndex]?.image ||
            "https://via.placeholder.com/300"
          }
        />

        <div style={styles.arrowButtonRight} onClick={nextImage}>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            gutterBottom
            variant="h6"
            fontSize="18px"
            fontWeight={700}
          >
            {`${data?.village_name}, ${data?.mandal_name}`}
          </Typography>
          {data?.is_basic_verified && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "8px",
              }}
            >
              <img
                src="https://1acre.in/static/images/icons/verified-active.svg"
                alt="Verified"
                style={{
                  width: "20px",
                  marginRight: "4px",
                  marginBottom: "5px",
                }}
              />
            </div>
          )}
        </div>
        <Typography variant="body1" fontSize={"1rem"}>
          <span>
            <b>{`${data?.total_land_size_in_acres.acres} Acres ${data?.total_land_size_in_acres.guntas} Guntas`}</b>{" "}
          </span>{" "}
          {`₹${data?.price_per_acre_crore.crore} Crores ${data?.price_per_acre_crore.lakh} Lakhs`}
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: {
    borderRadius: "20px",
  },
  sliderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 10,
    right: 0,
    margin: "20px",
    backgroundColor: "white",
    opacity: "0.7",
    borderRadius: "50%",
    transform: "translate(0,-50%)",
    width: "30px",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
  },

  iconRight: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 10,
    right: 0,
    margin: "20px",
    backgroundColor: "white",
    opacity: "0.7",
    borderRadius: "50%",
    transform: "translate(0,-50%)",
    width: "30px",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
    right: "10%",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  arrowButtonRight: {
    width: "40px",
    height: "40px",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    background: "white",
    opacity: "0.7",
    cursor: "pointer",
    padding: 0,
    position: "absolute",
    top: "50%",
    borderRadius: "50%",
    color: "#000",
    transform: "translate(0,-50%)",
    right: "2%",
  },
  arrowButtonLeft: {
    width: "40px",
    height: "40px",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    background: "white",
    opacity: "0.7",
    cursor: "pointer",
    padding: 0,
    position: "absolute",
    top: "50%",
    borderRadius: "50%",
    color: "#000",
    transform: "translate(0,-50%)",
    left: "2%",
  },
};

export default Slider;
