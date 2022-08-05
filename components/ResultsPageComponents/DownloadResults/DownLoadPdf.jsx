import { Button, Box } from "@chakra-ui/react";

import DownloadPdf from "../../../public/images/download-results-icons/DownloadPdf.svg";

export default function DownLoadpdf() {
  return (
    <Box>
      <a href="../../../data/pdfResultPage.pdf" download="ExamplePdf.pdf">
        <Button
          style={{
            color: "#fff",
          }}
        >
          <DownloadPdf />
        </Button>
      </a>
    </Box>
  );
}
