// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Universidad ArquiNube",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.youtube.com/shorts/lP3K3xXIZ3s",
    },
    {
      icon: <TwitterIcon />,
      link: "https://www.youtube.com/shorts/lP3K3xXIZ3s",
    },
    {
      icon: <GitHubIcon />,
      link: "https://www.youtube.com/shorts/lP3K3xXIZ3s",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/shorts/lP3K3xXIZ3s",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "freebies", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "premium tools", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "blog", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "bits & snippets", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "affiliate program", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "knowledge center", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "custom development", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "sponsorships", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "privacy policy", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
        { name: "licenses (EULA)", href: "https://www.youtube.com/shorts/lP3K3xXIZ3s" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos los derechos reservados. Copyright &copy; {date} ArquiNube por{" "}
      <MKTypography
        component="a"
        href="https://www.youtube.com/shorts/lP3K3xXIZ3s"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Don Hiro, Germancho, Eliza, Kelly, Carlos G, C.Tello
      </MKTypography>
      .
    </MKTypography>
  ),
};
