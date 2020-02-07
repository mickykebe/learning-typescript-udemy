import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  data: MatchData[] = [];

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.data = this.reader.data.map((row: string[]) => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    });
  }
}
