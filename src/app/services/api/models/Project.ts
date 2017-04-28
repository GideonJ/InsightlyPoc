export class Project {
  PROJECT_ID: number = 0;
  PROJECT_NAME: string = "";
  STATUS: string = "";
  PROJECT_DETAILS: string = "";
  OPPORTUNITY_ID: number = null;
  STARTED_DATE: string = "";
  COMPLETED_DATE: string = "";
  IMAGE_URL: string = "";
  RESPONSIBLE_USER_ID: number = null;
  OWNER_USER_ID: number = 0;
  DATE_CREATED_UTC: string = "";
  DATE_UPDATED_UTC: string = "";
  CATEGORY_ID: number = null;
  PIPELINE_ID: number = null;
  STAGE_ID: number = null;
  VISIBLE_TO: string = "";
  VISIBLE_TEAM_ID: number = null;
  VISIBLE_USER_IDS: string = "";
  CUSTOMFIELDS: [
    {
      CUSTOM_FIELD_ID: string;
      FIELD_VALUE: {}
    }
    ] = <any>[];
  TAGS: [
    {
      TAG_NAME: string
    }
    ] = <any>[];
  LINKS: [
    {
      LINK_ID: number;
      CONTACT_ID: number;
      OPPORTUNITY_ID: number;
      ORGANISATION_ID: number;
      PROJECT_ID: number;
      SECOND_PROJECT_ID: number;
      SECOND_OPPORTUNITY_ID: number;
      ROLE: string;
      DETAILS: string
    }
    ] = <any>[];
  CAN_EDIT: boolean = true;
  CAN_DELETE: boolean = true;
}
