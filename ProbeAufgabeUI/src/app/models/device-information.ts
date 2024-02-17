export class DeviceInformation {
    uid: number
    id?: string;
    name?: string;
    deviceTypeId?: string;
    failsafe?: boolean;
    tempMin?: number;
    tempMax?: number;
    installationPosition?: InstallationPositions;
    insertInto19InchCabinet?: boolean;
    motionEnable?: boolean;
    siplusCatalog?: boolean;
    simaticCatalog?: boolean;
    rotationAxisNumber?: number;
    positionAxisNumber?: number;
    advancedEnvironmentalConditions?: boolean;

    constructor(nUid: number) {
        this.uid = nUid;
    }

}

enum InstallationPositions {
    horizontal,
    vertical
}