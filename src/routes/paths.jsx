// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS = "/";

export const PATH_HOME = {
  root: ROOTS,
  general: {
    home: path(ROOTS, ""),
    about: path(ROOTS, "about"),
    services: path(ROOTS, "services"),
    contact: path(ROOTS, "contact"),
  },
};