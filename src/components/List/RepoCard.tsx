import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  Star,
  BugReport,
  ForkRight,
  RemoveRedEye,
} from "@mui/icons-material";

import { useState } from "react";

interface IRepoCardProps {
  repo: {
    author: string;
    repoLink: string;
    repoName: string;
    stars: number;
    forks: number;
    issues: number;
    watchers: number;
  };
}

export default function RepoCard({ repo }: IRepoCardProps) {
  const { author, repoLink, repoName, stars, forks, issues, watchers } = repo;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: 3 }}>
      <CardContent>
        <CardActionArea href={repoLink}>
          <Typography variant="h5">Author</Typography>
          <Typography>{author}</Typography>
          <Typography variant="h5">Project Name</Typography>
          <Typography>{repoName}</Typography>
        </CardActionArea>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleExpandClick}>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Star />
          <Typography sx={{ pl: 2 }}>{stars}</Typography>
          <BugReport sx={{ pl: 2 }} />
          <Typography sx={{ pl: 2 }}>{issues}</Typography>
          <ForkRight sx={{ pl: 2 }} />
          <Typography sx={{ pl: 2 }}>{forks}</Typography>
          <RemoveRedEye sx={{ pl: 2 }} />
          <Typography sx={{ pl: 2 }}>{watchers}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
