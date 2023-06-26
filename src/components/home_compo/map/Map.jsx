import React from "react";
import map from "../../images/map.png";
import styles from "./Map.module.css";
import { Tooltip } from "react-tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import man from "../../images/man.png";
import { geoPatterson } from "d3-geo-projection";
const geoUrl = "/features.json";
const width = 1000;
const height = 700;

const projection = geoPatterson()
  .translate([width / 2, height / 2])
  .scale(150);

const Map = () => {
  return (
    <div className={styles.map}>
      <div className={styles.map_flexbox}>
        <div className={styles.map_heading}>What people love about us.</div>
        <div className={styles.map_sub_heading}>
          Our customers appreciate our dedication to sustainability and value
          our eco-conscious approach. By choosing BENZ Packaging, you join us in
          making a positive impact on the environment.
        </div>
      </div>

      <div>
        <ComposableMap width={width} height={height} projection={projection}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="transparent"
                  stroke="#0081C9"
                  strokeWidth={2}
                  strokeDasharray="2 2"
                />
              ))
            }
          </Geographies>
          <Line
            from={[-80.006, 40.7128]}
            to={[-80.006, 44.7128]}
            stroke="grey"
            strokeWidth={2}
          />
          <Marker coordinates={[-80.006, 40.7128]}>
            <circle r={4} fill="#377C2B" className="my-tooltip" />
            <circle
              r={5}
              fill="transparent"
              stroke="#9BD770"
              strokeWidth={3}
              className="my-tooltip"
            />
            <circle
              r={6}
              fill="transparent"
              stroke="#C6EBA9"
              strokeWidth={2}
              className="my-tooltip"
            />
          </Marker>
          <Line
            from={[100.006, 70.7128]}
            to={[100.006, 74.7128]}
            stroke="grey"
            strokeWidth={2}
          />
          <Marker coordinates={[100, 70.7128]}>
            <circle r={4} fill="#377C2B" className="my-tooltip" />
            <circle
              r={5}
              fill="transparent"
              stroke="#9BD770"
              strokeWidth={3}
              className="my-tooltip"
            />
            <circle
              r={6}
              fill="transparent"
              stroke="#C6EBA9"
              strokeWidth={2}
              className="my-tooltip"
            />
          </Marker>
          <Line
            from={[78.006, 7.7128]}
            to={[78.006, 11.7128]}
            stroke="grey"
            strokeWidth={2}
          />
          <Marker coordinates={[78.006, 7.128]}>
            <circle r={4} fill="#377C2B" className="my-tooltip" />
            <circle
              r={5}
              fill="transparent"
              stroke="#9BD770"
              strokeWidth={3}
              className="my-tooltip"
            />
            <circle
              r={6}
              fill="transparent"
              stroke="#C6EBA9"
              strokeWidth={2}
              className="my-tooltip"
            />
          </Marker>
          <Line
            from={[-60.006, -40.7128]}
            to={[-60.006, -36.7128]}
            stroke="grey"
            strokeWidth={2}
          />
          <Marker coordinates={[-60.006, -40.7128]}>
            <circle r={4} fill="#377C2B" className="my-tooltip" />
            <circle
              r={5}
              fill="transparent"
              stroke="#9BD770"
              strokeWidth={3}
              className="my-tooltip"
            />
            <circle
              r={6}
              fill="transparent"
              stroke="#C6EBA9"
              strokeWidth={2}
              className="my-tooltip"
            />
          </Marker>
        </ComposableMap>
        <Tooltip
          anchorSelect=".my-tooltip"
          style={{
            backgroundColor: "white",
            color: "#222",
            borderRadius: "10px",
            width: "210px",
          }}
        >
          <div className={styles.tooltip_container}>
            <div className={styles.image_container}>
              <img src={man} alt="man" className={styles.image} />
            </div>
            <div>
              <p className={styles.content_head}>John Doe</p>
              <p className={styles.content_content}>
                You can type a testimony here and can add a customer name andd
                image.
              </p>
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Map;
