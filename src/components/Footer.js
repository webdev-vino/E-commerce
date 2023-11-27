import React from "react";
import "./footer.css";

const Footer = () => {
  const date = new Date();

  const getYear = date.getFullYear();

  return (
    <div className="footer">
      <table>
        <tr>
          <th>Need Help</th>
          <th>About Us</th>
          <th>Useful Info</th>
          <th>Get In Touch</th>
        </tr>
        <tr>
          <td>About Us</td>
          <td>About Us</td>
          <td>About Us</td>
          <td>
            <i class="fa-solid fa-phone"></i> &nbsp;+91 00000 00000
          </td>
        </tr>
        <tr>
          <td>Careers</td>
          <td>Careers</td>
          <td>Careers</td>
          <td>
            <i class="fa-regular fa-envelope"></i> &nbsp;developer@gmail.com
          </td>
        </tr>
        <tr>
          <td>Affiliates</td>
          <td>Affiliates</td>
          <td>Affiliates</td>
          <td>
            <i class="fa-solid fa-globe"></i> &nbsp;www.google.com
          </td>
        </tr>
        <tr>
          <td>Stores</td>
          <td>Stores</td>
          <td>Stores</td>
          <td>
            <i class="fa-solid fa-location-dot"></i> &nbsp; no 1, guindy,
            chennai-600 022
          </td>
        </tr>
      </table>
      <div className="rights">
        <p>@{getYear}. All rights reserved by vengadesh</p>
      </div>
    </div>
  );
};

export default Footer;
