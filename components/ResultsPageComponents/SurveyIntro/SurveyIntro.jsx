import RightPaddedContent from "../SharedComponents/RightPaddedContent";
import Introduction from "./Introduction";
import DownloadResults from "../DownloadResults/DownloadResults";

export default function SurveyIntro() {
  return (
    <RightPaddedContent indentComponent={DownloadResults}>
      <Introduction />;
    </RightPaddedContent>
  );
}
