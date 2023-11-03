import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

function SkeletonCardLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F8F8FF",
        paddingTop: "4.3em",
        paddingBottom: "4.3em",
      }}
    >
      <Card style={{ margin: "1rem" }}>
        <Skeleton variant="rect" width={300} height={200} />
        <CardContent>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </CardContent>
      </Card>

      <Card style={{ margin: "1rem" }}>
        <Skeleton variant="rect" width={300} height={200} />
        <CardContent>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </CardContent>
      </Card>

      <Card style={{ margin: "1rem" }}>
        <Skeleton variant="rect" width={300} height={200} />
        <CardContent>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </CardContent>
      </Card>
    </div>
  );
}

export default SkeletonCardLoader;
