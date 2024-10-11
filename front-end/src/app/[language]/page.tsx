import type { Metadata } from "next";
import { getServerTranslation } from "@/services/i18n";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Trans } from "react-i18next/TransWithoutContext";

type Props = {
  params: { language: string };
};

const books = [
  { title: "Book 1", genre: "Fiction", country: "Vietnam" },
  { title: "Book 2", genre: "Fantasy", country: "Japan" },
  { title: "Book 3", genre: "Non-Fiction", country: "USA" },
  { title: "Book 4", genre: "Historical", country: "France" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(params.language, "home");

  return {
    title: t("title"),
  };
}

export default async function Home({ params }: Props) {
  const { t } = await getServerTranslation(params.language, "home");

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        wrap="nowrap"
        pt={3}
        direction="column"
        sx={{ height: "90vh", justifyContent: "space-between" }}
      >
        <Grid item>
          <Typography variant="h3" data-testid="home-title" gutterBottom>
            {t("title")}
          </Typography>
          <Typography>
            <Trans
              i18nKey={`description`}
              t={t}
              components={[
                <MuiLink
                  key="1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/brocoders/extensive-react-boilerplate/blob/main/docs/README.md"
                >
                  {}
                </MuiLink>,
              ]}
            />
          </Typography>
          <Typography variant="h4" gutterBottom>
            Books
          </Typography>
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                {book.title} - {book.genre} ({book.country})
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item sx={{ mx: "auto" }}>
          <MuiLink href="/privacy-policy">Privacy Policy</MuiLink>
        </Grid>
      </Grid>
    </Container>
  );
}
