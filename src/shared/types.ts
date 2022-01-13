export type SpecificMediaItem = {
  data: [
    {
      center: string;
      date_created: string; // "1969-07-21T00:00:00Z"
      description: string;
      keywords: string[];
      media_type: string;
      nasa_id: string;
      title: string;
    }
  ];
  href: string;
  links: [
    {
      href: string;
      rel: string;
      render: string;
    }
  ];
};

export type NasaApiResponse = {
  collection: {
    href: string;
    items: Array<SpecificMediaItem>;
    links: [];
    metadata: {
      total_hits: number;
    };
    version: String;
  };
};

export type MetaDataResponse = {
  location: string;
};

type AssetHref = {
  href: string;
};

export type AssetResponse = {
  collection: {
    href: string;
    items: Array<AssetHref>;
    version: string;
  };
};

export type ImageExifData = {
  'AVAIL:Album': string;
  'AVAIL:Center': string;
  'AVAIL:DateCreated': string;
  'AVAIL:Description': string;
  'AVAIL:Description508': string;
  'AVAIL:Keywords': Array<string>;
  'AVAIL:Location': string;
  'AVAIL:MediaType': string;
  'AVAIL:NASAID': string;
  'AVAIL:Owner': string;
  'AVAIL:Photographer': string;
  'AVAIL:SecondaryCreator': string;
  'AVAIL:Title': string;
  'Composite:ImageSize': string;
  'Composite:Megapixels': number;
  'EXIF:ColorSpace': string;
  'EXIF:ComponentsConfiguration': string;
  'EXIF:CreateDate': string; // "2011:04:26 15:00:01"
  'EXIF:ExifVersion': string;
  'EXIF:FlashpixVersion': string;
  'EXIF:ImageDescription': string;
  'EXIF:ResolutionUnit': string;
  'EXIF:XResolution': number;
  'EXIF:YCbCrPositioning': string;
  'EXIF:YResolution': number;
  'ExifTool:ExifToolVersion': number; // 10.05
  'File:BitsPerSample': number;
  'File:ColorComponents': number;
  'File:CurrentIPTCDigest': string;
  'File:Directory': string;
  'File:EncodingProcess': string;
  'File:ExifByteOrder': string;
  'File:FileAccessDate': string; // "2016:08:12 09:54:19-07:00"
  'File:FileInodeChangeDate': string; // "2016:08:12 09:54:19-07:00"
  'File:FileModifyDate': string; // "2016:08:12 09:54:19-07:00"
  'File:FileName': string;
  'File:FilePermissions': string;
  'File:FileSize': string;
  'File:FileType': string;
  'File:FileTypeExtension': string;
  'File:ImageHeight': number;
  'File:ImageWidth': number;
  'File:MIMEType': string;
  'IPTC:ApplicationRecordVersion': number;
  'IPTC:Keywords': Array<string>;
  'JFIF:JFIFVersion': number; // 1.01
  'JFIF:ResolutionUnit': string;
  'JFIF:XResolution': number;
  'JFIF:YResolution': number;
  SourceFile: string;
  'XMP:CreateDate': string; // "2011:04:26 15:00:01"
  'XMP:Createdate': string; // "2011:04:26 15:00:01"
  'XMP:Credit': string;
  'XMP:DateCreated': string; // "2011:04:26 15:00:01"
  'XMP:Description': string;
  'XMP:ImageDescription': string;
  'XMP:Nasa_id': string;
  'XMP:Source': string;
  'XMP:Title': string;
  'XMP:XMPToolkit': string;
};
