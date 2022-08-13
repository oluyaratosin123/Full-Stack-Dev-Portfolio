import React from "react";
import { skills } from "../components/shared/SkillsData";
import { Link } from "react-router-dom";
import * as CgBorder from "react-icons/cg";

const Skills = () => {
  const {
    javascript,
    photo,
    react,
    sql,
    ruby,
    rails,
    html,
    sass,
    bootstrap,
    cs,
    heroku,
    git,
  } = skills;

  const border = {
    bs_1: {
      fontSize: "30px",
      color: "#dc3545",
    },
  };
  return (
    <div className="skills_cont">
      <h1 className="text-center animate_ fw-bolder mt-4">What I Do</h1>
      <div className="text-center">
        <CgBorder.CgBorderStyleSolid style={border.bs_1} />
      </div>
      <div className="skills container">
        <div className="">
          <div className="d-flex flex-wrap">
            {javascript && (
              <img
                className="m-4 skill_icon"
                src={javascript}
                alt="javascript"
              />
            )}
            {react && (
              <img className="m-4 skill_icon" src={react} alt="react" />
            )}
            {sql && <img className="m-4 skill_icon" src={sql} alt="postgres" />}
            {ruby && <img className="m-4 skill_icon" src={ruby} alt="ruby" />}
            {rails && (
              <img className="m-4 skill_icon" src={rails} alt="rails" />
            )}
            {html && <img className="m-4 skill_icon" src={html} alt="html" />}
            {cs && <img className="m-4 skill_icon" src={cs} alt="css" />}
            {heroku && (
              <img className="m-4 skill_icon" src={heroku} alt="heroku" />
            )}
            {git && <img className="m-4 skill_icon" src={git} alt="github" />}
            {sass && <img className="m-4 skill_icon" src={sass} alt="scss" />}
            {bootstrap && (
              <img className="m-4 skill_icon" src={bootstrap} alt="bootstrap" />
            )}
          </div>
          <div className="col-md-6 offset-md-4 link_to_project">
            <Link
              to="/projects"
              className="btn btn-lg btn-outline-danger btn_projects fw-bolder text-center"
              style={{ fontSize: "16px" }}
            >
              View Projects
            </Link>
          </div>
        </div>
        <div>
          {photo && (
            <img src={photo} alt="skill_photo" className="skills_img" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
