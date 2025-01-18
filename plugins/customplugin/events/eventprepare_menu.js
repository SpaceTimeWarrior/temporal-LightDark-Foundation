const id = "EVENT_PREP_MENU";
const name = "Prep Menu";
const groups = ["TL_EVENTS","EVENT_GROUP_SCREEN"];

const fields = [
  {
    label: "Prepare menu for drawing",
  },
  {
    key: "xnoverlay",
    label: "overlay x coordinate",
    type: "slider",
    min: 0,
    max: 20,
    defaultValue: 0,
  },
  {
    key: "ynoverlay",
    label: "overlay y coordinate",
    type: "slider",
    min: 0,
    max: 18,
    defaultValue: 16,
  },
  {
    key: "color",
    label: "fill color",
    type: "overlayColor",
    defaultValue: "black",
  },
  {
    key: "xoverlay",
    label:"x position on overlay to copy to",
    type: "number",
    defaultValue: 0,
  },
  {
    key: "yoverlay",
    label:"y position on overlay to copy to",
    type: "number",
    defaultValue: 0,
  },
  {
    key: "overlayw",
    label:"copy width",
    type: "number",
    defaultValue: 20,
  },
  {
    key: "overlayh",
    label:"copy height",
    type: "number",
    defaultValue: 2,
  },
  {
    key: "xsource",
    type: "number",
    defaultValue: 0,
  },
  {
    key: "ysource",
    type: "number",
    defaultValue: 16,
  },
];


const compile = (input, helpers) => {
  const { overlayShow,_addCmd } = helpers;
  overlayShow(input.color, input.xnoverlay, input.ynoverlay);
  _addCmd("VM_OVERLAY_SET_SUBMAP", input.xoverlay,input.yoverlay,input.overlayw,input.overlayh,input.xsource,input.ysource);
};

module.exports = {
   id,
   name,
   groups,
   fields,
   compile,
   allowedBeforeInitFade: true,
};