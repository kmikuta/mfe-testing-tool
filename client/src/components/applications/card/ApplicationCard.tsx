import { FC } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Link as MatLink,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Application } from "../../../models/Application";
import { Link } from "../../link/Link";

export interface ApplicationCardProps {
  application: Application;
}

export const ApplicationCard: FC<ApplicationCardProps> = ({ application }) => {
  const { id, name, url, type } = application;

  return (
    <Card sx={{ height: 185 }}>
      <CardContent sx={{ position: "relative" }}>
        <IconButton aria-label="remove application" sx={{ position: "absolute", top: 0, right: 0 }}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <List>
          <ListItem disablePadding>
            <b>URL</b>:&nbsp;<MatLink href={url}>{url}</MatLink>
          </ListItem>
          <ListItem disablePadding>
            <b>Type</b>: {type.toLocaleLowerCase()}
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Box width="100%" display="flex" justifyContent="center">
          <Link href={id} underline="hover">
            Open
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
};
