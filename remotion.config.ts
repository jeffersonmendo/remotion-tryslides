/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";

Config.setRspack(true);
// Prioritize fidelity over render time and file size for final CLI exports.
Config.setVideoImageFormat("png");
Config.setStillImageFormat("png");
Config.setCodec("h264");
Config.setCrf(1);
Config.setX264Preset("slow");
Config.setAudioBitrate("320k");
Config.setHardwareAcceleration("disable");
Config.setColorSpace("bt709");
Config.setOverwriteOutput(true);
Config.setDefaultPremountInSeconds(2);
