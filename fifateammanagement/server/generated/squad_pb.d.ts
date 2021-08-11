// package: 
// file: squad.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddPlayerRequest extends jspb.Message { 
    getTargetteam(): string;
    setTargetteam(value: string): AddPlayerRequest;

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): SquadPlayer | undefined;
    setPlayer(value?: SquadPlayer): AddPlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddPlayerRequest): AddPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPlayerRequest;
    static deserializeBinaryFromReader(message: AddPlayerRequest, reader: jspb.BinaryReader): AddPlayerRequest;
}

export namespace AddPlayerRequest {
    export type AsObject = {
        targetteam: string,
        player?: SquadPlayer.AsObject,
    }
}

export class SquadBaseRequest extends jspb.Message { 
    getTargetteam(): string;
    setTargetteam(value: string): SquadBaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SquadBaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SquadBaseRequest): SquadBaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SquadBaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SquadBaseRequest;
    static deserializeBinaryFromReader(message: SquadBaseRequest, reader: jspb.BinaryReader): SquadBaseRequest;
}

export namespace SquadBaseRequest {
    export type AsObject = {
        targetteam: string,
    }
}

export class SquadBaseResponse extends jspb.Message { 
    getSucces(): boolean;
    setSucces(value: boolean): SquadBaseResponse;
    getErrormessage(): string;
    setErrormessage(value: string): SquadBaseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SquadBaseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SquadBaseResponse): SquadBaseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SquadBaseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SquadBaseResponse;
    static deserializeBinaryFromReader(message: SquadBaseResponse, reader: jspb.BinaryReader): SquadBaseResponse;
}

export namespace SquadBaseResponse {
    export type AsObject = {
        succes: boolean,
        errormessage: string,
    }
}

export class SquadPlayerList extends jspb.Message { 
    getSucces(): boolean;
    setSucces(value: boolean): SquadPlayerList;
    getErrormessage(): string;
    setErrormessage(value: string): SquadPlayerList;
    clearSquadsList(): void;
    getSquadsList(): Array<SquadPlayer>;
    setSquadsList(value: Array<SquadPlayer>): SquadPlayerList;
    addSquads(value?: SquadPlayer, index?: number): SquadPlayer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SquadPlayerList.AsObject;
    static toObject(includeInstance: boolean, msg: SquadPlayerList): SquadPlayerList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SquadPlayerList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SquadPlayerList;
    static deserializeBinaryFromReader(message: SquadPlayerList, reader: jspb.BinaryReader): SquadPlayerList;
}

export namespace SquadPlayerList {
    export type AsObject = {
        succes: boolean,
        errormessage: string,
        squadsList: Array<SquadPlayer.AsObject>,
    }
}

export class SquadPlayer extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): SquadPlayer;
    getName(): string;
    setName(value: string): SquadPlayer;
    getBaseoverall(): number;
    setBaseoverall(value: number): SquadPlayer;
    getCurrentoverall(): number;
    setCurrentoverall(value: number): SquadPlayer;
    getPotentiel(): number;
    setPotentiel(value: number): SquadPlayer;
    clearPositionList(): void;
    getPositionList(): Array<string>;
    setPositionList(value: Array<string>): SquadPlayer;
    addPosition(value: string, index?: number): string;
    getCountry(): string;
    setCountry(value: string): SquadPlayer;
    getContracttype(): string;
    setContracttype(value: string): SquadPlayer;
    getAge(): number;
    setAge(value: number): SquadPlayer;
    getValue(): number;
    setValue(value: number): SquadPlayer;
    getWages(): number;
    setWages(value: number): SquadPlayer;
    getAtkworkrate(): string;
    setAtkworkrate(value: string): SquadPlayer;
    getDefworkrate(): string;
    setDefworkrate(value: string): SquadPlayer;
    getWeakfoot(): number;
    setWeakfoot(value: number): SquadPlayer;
    getTechnique(): number;
    setTechnique(value: number): SquadPlayer;
    getMinpotential(): number;
    setMinpotential(value: number): SquadPlayer;
    getMaxpotential(): number;
    setMaxpotential(value: number): SquadPlayer;
    getStatus(): string;
    setStatus(value: string): SquadPlayer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SquadPlayer.AsObject;
    static toObject(includeInstance: boolean, msg: SquadPlayer): SquadPlayer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SquadPlayer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SquadPlayer;
    static deserializeBinaryFromReader(message: SquadPlayer, reader: jspb.BinaryReader): SquadPlayer;
}

export namespace SquadPlayer {
    export type AsObject = {
        uuid: string,
        name: string,
        baseoverall: number,
        currentoverall: number,
        potentiel: number,
        positionList: Array<string>,
        country: string,
        contracttype: string,
        age: number,
        value: number,
        wages: number,
        atkworkrate: string,
        defworkrate: string,
        weakfoot: number,
        technique: number,
        minpotential: number,
        maxpotential: number,
        status: string,
    }
}
