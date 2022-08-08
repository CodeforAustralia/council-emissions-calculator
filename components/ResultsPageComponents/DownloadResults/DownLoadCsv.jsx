import { Button, Box, Text } from "@chakra-ui/react";
import DownloadCsv from "../../../public/images/download-results-icons/DownloadCSV.svg";
import { CSVLink } from "react-csv";

export default function DownLoadcsv() {
  return (
    <Box
      style={{
        backgroundColor: "white",
        _hover: { bg: "#ebedf0" },
      }}
    >
      <Button
        style={{
          width: "177px",
          height: "56px",
          border: "none",
          outline: "none",
          backgroundColor: "white",
          _hover: { bg: "#ebedf0" },
        }}
      >
        <CSVLink data="../../public/pdfcsv/Sheet1test.csv">
          {" "}
          <DownloadCsv />
        </CSVLink>
      </Button>
      <Text
        fontSize="12px"
        fontFamily="Public Sans"
        fontWeight={600}
        textAlign="center"
        px="29%"
        lineHeight="13px"
        color="#044B7F"
      >
        Downaload survey data
      </Text>
    </Box>
  );
}
