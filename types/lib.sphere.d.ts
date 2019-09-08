/**
 *  Cell, the Sphere packaging compiler
 *  Copyright (c) 2015-2019, Fat Cerberus
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 *  * Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 *
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 *  * Neither the name of miniSphere nor the names of its contributors may be
 *    used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 *  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 *  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 *  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 *  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 *  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 *  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 *  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
**/

declare const global: typeof globalThis;

declare namespace Sphere
{
	const APILevel: number;
	const Compiler: string;
	const Engine: string;
	const Game: {
		author: string;
		main: string;
		name: string;
		resolution: string;
		saveId: string;
		summary: string;
	};
	const Version: number;

	let frameRate: number;
	let frameSkip: number;
	let fullScreen: boolean;
	let main: any;

	function abort(message: string): void;
	function now(): number;
	function restart(): void;
	function setResolution(width: number, height: number): void;
	function shutDown(): void;
	function sleep(frames: number): Promise<void>;
}

declare namespace SSj
{
	function assert(check: boolean, description?: string): void;
	function flipScreen(): void;
	function log(message: string | object | Error): void;
	function trace(message: string): void;
	function now(): number;
	function profile(object: object, methodName: string, description?: string): void;
}

interface DirectoryEntry
{
	isDirectory: boolean;
	fileName: string;
	fullPath: string;
}

interface DirectoryStreamOptions
{
	recursive?: boolean;
}

interface JobOptions
{
	inBackground?: boolean;
	priority?: number;
}

declare interface MouseEvent
{
	key: MouseKey | null;
	x?: number;
	y?: number;
	delta?: number;
}

declare interface ShaderOptions
{
	vertexFile: string;
	fragmentFile: string;
}

declare interface Size2D
{
	width: number;
	height: number;
}

declare interface SoundOptions
{
	pan?: number;
	speed?: number;
	volume?: number;
}

declare interface Vertex
{
	x: number;
	y: number;
	z?: number;
	u?: number;
	v?: number;
	color?: Color;
}

declare enum FileOp
{
	Read,
	Write,
	Update
}

declare enum Key
{
	Alt,
	AltGr,
	Apostrophe,
	Backslash,
	Backspace,
	CapsLock,
	CloseBrace,
	Comma,
	Delete,
	Down,
	End,
	Enter,
	Equals,
	Escape,
	F1,
	F2,
	F3,
	F4,
	F5,
	F6,
	F7,
	F8,
	F9,
	F10,
	F11,
	F12,
	Home,
	Hyphen,
	Insert,
	LCtrl,
	LShift,
	Left,
	NumLock,
	OpenBrace,
	PageDown,
	PageUp,
	Period,
	RCtrl,
	RShift,
	Right,
	ScrollLock,
	Semicolon,
	Slash,
	Space,
	Tab,
	Tilde,
	Up,
	A,
	B,
	C,
	D,
	E,
	F,
	G,
	H,
	I,
	J,
	K,
	L,
	M,
	N,
	O,
	P,
	Q,
	R,
	S,
	T,
	U,
	V,
	W,
	X,
	Y,
	Z,
	D1,
	D2,
	D3,
	D4,
	D5,
	D6,
	D7,
	D8,
	D9,
	D0,
	NumPad1,
	NumPad2,
	NumPad3,
	NumPad4,
	NumPad5,
	NumPad6,
	NumPad7,
	NumPad8,
	NumPad9,
	NumPad0,
	NumPadEnter,
	Add,
	Decimal,
	Divide,
	Multiply,
	Subtract,
}

declare enum MouseKey
{
	Left,
	Middle,
	Right,
	WheelUp,
	WheelDown,
	Back,
	Forward,
}

declare enum ShapeType
{
	Fan,
	Lines,
	LineLoop,
	LineStrip,
	Points,
	Triangles,
	TriStrip
}

declare class BlendOp
{
	static readonly Default: BlendOp;
	static readonly Add: BlendOp;
	static readonly Average: BlendOp;
	static readonly Multiply: BlendOp;
	static readonly Replace: BlendOp;
	static readonly Subtract: BlendOp;
}

declare class Color
{
	static readonly AliceBlue: Color;
	static readonly AntiqueWhite: Color;
	static readonly Aqua: Color;
	static readonly Aquamarine: Color;
	static readonly Azure: Color;
	static readonly Beige: Color;
	static readonly Bisque: Color;
	static readonly Black: Color;
	static readonly BlanchedAlmond: Color;
	static readonly Blue: Color;
	static readonly BlueViolet: Color;
	static readonly Brown: Color;
	static readonly BurlyWood: Color;
	static readonly CadetBlue: Color;
	static readonly Chartreuse: Color;
	static readonly Chocolate: Color;
	static readonly Coral: Color;
	static readonly CornflowerBlue: Color;
	static readonly Cornsilk: Color;
	static readonly Crimson: Color;
	static readonly Cyan: Color;
	static readonly DarkBlue: Color;
	static readonly DarkCyan: Color;
	static readonly DarkGoldenrod: Color;
	static readonly DarkGray: Color;
	static readonly DarkGreen: Color;
	static readonly DarkKhaki: Color;
	static readonly DarkMagenta: Color;
	static readonly DarkOliveGreen: Color;
	static readonly DarkOrange: Color;
	static readonly DarkOrchid: Color;
	static readonly DarkRed: Color;
	static readonly DarkSalmon: Color;
	static readonly DarkSeaGreen: Color;
	static readonly DarkSlateBlue: Color;
	static readonly DarkSlateGray: Color;
	static readonly DarkTurquoise: Color;
	static readonly DarkViolet: Color;
	static readonly DeepPink: Color;
	static readonly DeepSkyBlue: Color;
	static readonly DimGray: Color;
	static readonly DodgerBlue: Color;
	static readonly FireBrick: Color;
	static readonly FloralWhite: Color;
	static readonly ForestGreen: Color;
	static readonly Fuchsia: Color;
	static readonly Gainsboro: Color;
	static readonly GhostWhite: Color;
	static readonly Gold: Color;
	static readonly Goldenrod: Color;
	static readonly Gray: Color;
	static readonly Green: Color;
	static readonly GreenYellow: Color;
	static readonly Honeydew: Color;
	static readonly HotPink: Color;
	static readonly IndianRed: Color;
	static readonly Indigo: Color;
	static readonly Ivory: Color;
	static readonly Khaki: Color;
	static readonly Lavender: Color;
	static readonly LavenderBlush: Color;
	static readonly LawnGreen: Color;
	static readonly LemonChiffon: Color;
	static readonly LightBlue: Color;
	static readonly LightCoral: Color;
	static readonly LightCyan: Color;
	static readonly LightGoldenrodYellow: Color;
	static readonly LightGray: Color;
	static readonly LightGreen: Color;
	static readonly LightPink: Color;
	static readonly LightSalmon: Color;
	static readonly LightSeaGreen: Color;
	static readonly LightSkyBlue: Color;
	static readonly LightSlateGray: Color;
	static readonly LightSteelBlue: Color;
	static readonly LightYellow: Color;
	static readonly Lime: Color;
	static readonly LimeGreen: Color;
	static readonly Linen: Color;
	static readonly Magenta: Color;
	static readonly Maroon: Color;
	static readonly MediumAquamarine: Color;
	static readonly MediumBlue: Color;
	static readonly MediumOrchid: Color;
	static readonly MediumPurple: Color;
	static readonly MediumSeaGreen: Color;
	static readonly MediumSlateBlue: Color;
	static readonly MediumSpringGreen: Color;
	static readonly MediumTurquoise: Color;
	static readonly MediumVioletRed: Color;
	static readonly MidnightBlue: Color;
	static readonly MintCream: Color;
	static readonly MistyRose: Color;
	static readonly Moccasin: Color;
	static readonly NavajoWhite: Color;
	static readonly Navy: Color;
	static readonly OldLace: Color;
	static readonly Olive: Color;
	static readonly OliveDrab: Color;
	static readonly Orange: Color;
	static readonly OrangeRed: Color;
	static readonly Orchid: Color;
	static readonly PaleGoldenrod: Color;
	static readonly PaleGreen: Color;
	static readonly PaleTurquoise: Color;
	static readonly PaleVioletRed: Color;
	static readonly PapayaWhip: Color;
	static readonly PeachPuff: Color;
	static readonly Peru: Color;
	static readonly Pink: Color;
	static readonly Plum: Color;
	static readonly PowderBlue: Color;
	static readonly Purple: Color;
	static readonly Red: Color;
	static readonly RosyBrown: Color;
	static readonly RoyalBlue: Color;
	static readonly SaddleBrown: Color;
	static readonly Salmon: Color;
	static readonly SandyBrown: Color;
	static readonly SeaGreen: Color;
	static readonly Seashell: Color;
	static readonly Sienna: Color;
	static readonly Silver: Color;
	static readonly SkyBlue: Color;
	static readonly SlateBlue: Color;
	static readonly SlateGray: Color;
	static readonly Snow: Color;
	static readonly SpringGreen: Color;
	static readonly SteelBlue: Color;
	static readonly Tan: Color;
	static readonly Teal: Color;
	static readonly Thistle: Color;
	static readonly Tomato: Color;
	static readonly Transparent: Color;
	static readonly Turquoise: Color;
	static readonly Violet: Color;
	static readonly Wheat: Color;
	static readonly White: Color;
	static readonly WhiteSmoke: Color;
	static readonly Yellow: Color;
	static readonly YellowGreen: Color;
	static readonly PurwaBlue: Color;
	static readonly RebeccaPurple: Color;
	static readonly StankyBean: Color;

	static is(color1: Color, color2: Color): boolean;
	static mix(color1: Color, color2: Color): Color;
	static mix(color1: Color, color2: Color, w1: number, w2: number): Color;
	static of(name: string): Color;

	constructor(red: number, green: number, blue: number, alpha?: number);

	name: string;
	r: number;
	g: number;
	b: number;
	a: number;

	clone(): Color;
	fadeTo(alphaFactor: number): Color;
}

declare class DirectoryStream implements Iterable<DirectoryEntry>
{
	[Symbol.iterator](): Iterator<DirectoryEntry>;
	constructor(directoryName: string, options?: DirectoryStreamOptions);

	readonly fileCount: number;
	readonly fileName: string;
	position: number;

	dispose(): void;
	next(): IteratorResult<DirectoryEntry>;
	rewind(): void;
}

declare namespace Dispatch
{
	function cancelAll(): void;
	function later(numFrames: number, fn: Function): JobToken;
	function now(callback: Function): JobToken;
	function onExit(callback: Function): JobToken;
	function onRender(callback: Function, options?: JobOptions): JobToken;
	function onUpdate(callback: Function, options?: JobOptions): JobToken;
}

declare namespace FS
{
	function createDirectory(path: string): void;
	function deleteFile(path: string): void;
	function directoryExists(path: string): boolean;
	function directoryOf(path: string): string;
	function evaluateScript(path: string): void;
	function extensionOf(path: string): string;
	function fileExists(path: string): boolean;
	function fileNameOf(path: string): string;
	function fullPath(filename: string, baseDirectory?: string): string;
	function readFile(path: string): string;
	function relativePath(path: string, baseDirectory: string): string;
	function removeDirectory(directoryPath: string): void;
	function rename(originalPath: string, newPath: string): void;
	function writeFile(path: string, content: string | string[] | ArrayBuffer | ArrayBufferView): void;
}

declare class FileStream
{
	static open(fileName: string, fileOp: FileOp): Promise<FileStream>;

	constructor(fileName: string, fileOp: FileOp)

	readonly fileName: string;
	readonly fileSize: number;
	position: number;

	asyncRead(numBytes: number): Promise<ArrayBuffer>;
	asyncWrite(data: ArrayBuffer | ArrayBufferView): Promise<void>;
	dispose(): void;
	read(size: number): ArrayBuffer;
	write(data: ArrayBuffer | ArrayBufferView): void;
}

declare class Font
{
	static readonly Default: Font;

	static fromFile(fileName: string): Promise<Font>;

	readonly fileName: string;
	readonly height: number;

	constructor(fileName: string);

	drawText(surface: Surface, x: number, y: number, text: string, color?: Color, wrapWidth?: number): void;
	getTextSize(text: string, wrapWidth: number): Size2D;
	heightOf(text: string, wrapWidth?: number): number;
	widthOf(text: string): number;
	wordWrap(text: string, wrapWidth: number): string[];
}

declare class IndexList
{
	constructor(indices: number[]);
}

declare interface JobToken
{
	cancel(): void;
	pause(): void;
	resume(): void;
}

declare class Joystick
{
	static readonly Null: Joystick;
	static readonly P1: Joystick;
	static readonly P2: Joystick;
	static readonly P3: Joystick;
	static readonly P4: Joystick;

	static getDevices(): Joystick[];

	readonly name: string;
	readonly numAxes: number;
	readonly numButtons: number;

	getPosition(axisID: number): number;
	isPressed(buttonID: number): boolean;
}

declare class Keyboard
{
	static readonly Default: Keyboard

	readonly capsLock: boolean;
	readonly numLock: boolean;
	readonly scrollLock: boolean;

	charOf(key: Key, shifted?: boolean): string;
	clearQueue(): void;
	getKey(): Key | null;
	isPressed(key: Key): boolean;
}

declare class Mixer
{
	static readonly Default: Mixer;

	volume: number;

	constructor(sampleRate: number, bitsPerSample: number, numChannels?: number);
}

declare class Model
{
	constructor(shapes: Shape[], shader?: Shader);

	shader: Shader;
	transform: Transform;

	draw(surface?: Surface): void
}

declare class Mouse
{
	static readonly Default: Mouse;

	readonly position: [ number, number ];
	readonly x: number;
	readonly y: number;

	clearQueue(): void;
	getEvent(): MouseEvent;
	isPressed(key: MouseKey): boolean;
}

declare class RNG implements Iterable<number>
{
	static fromSeed(seed: number): RNG;
	static fromState(state: string): RNG;

	[Symbol.iterator](): Iterator<number>;
	constructor();

	state: string;

	next(): IteratorResult<number>;
}

declare class Sample
{
	static fromFile(fileName: string): Promise<Sample>;

	constructor(fileName: string);

	readonly fileName: string;

	play(mixer: Mixer, options?: SoundOptions): void;
	stopAll(): void;
}

declare class Server
{
	constructor(port: number, backlogSize?: number);

	noDelay: boolean;
	numPending: number;

	accept(): void;
	acceptNext(): Promise<Socket>;
	close(): void;
}

declare class Shader
{
	static readonly Default: Shader;

	static fromFiles(options: ShaderOptions): Promise<Shader>;

	constructor(options: ShaderOptions);

	clone(): Shader;
	setBoolean(name: string, value: boolean): void;
	setColorVector(name: string, color: Color): void;
	setFloat(name: string, value: number) : void;
	setFloatVector(name: string, values: [number, number] | [number, number, number] | [number, number, number, number]): void;
	setInt(name: string, value: number): void;
	setIntVector(name: string, values: [number, number] | [number, number, number] | [number, number, number, number]): void;
	setMatrix(name: string, transform: Transform): void;
}

declare class Shape
{
	static drawImmediate(type: ShapeType, vertexList: VertexList): void;
	static drawImmediate(type: ShapeType, texture: Texture | null, vertexList: VertexList): void;
	static drawImmediate(surface: Surface, type: ShapeType, vertexList: VertexList): void;
	static drawImmediate(surface: Surface, type: ShapeType, texture: Texture | null, vertexList: VertexList): void;

	constructor(type: number, texture: Texture | null, vertices: VertexList, indices?: IndexList);

	indexList: IndexList | null;
	texture: Texture | null;
	vertexList: VertexList;

	draw(transform?: Transform): void;
	draw(surface: Surface, transform?: Transform): void;
}

declare class Socket
{
	static connectTo(hostName: string, port: number): Promise<Socket>;

	constructor();
	constructor(hostName: string, port: number);

	readonly bytesAvailable: number;
	readonly bytesPending: number;
	readonly bytesReceived: number;
	readonly bytesSent: number;
	readonly connected: boolean;
	noDelay: boolean;
	readonly remoteAddress: string;
	readonly remotePort: number;

	asyncRead(numBytes: number): Promise<ArrayBuffer>;
	asyncWrite(data: ArrayBuffer | ArrayBufferView): Promise<void>;
	close(): Promise<void>;
	connectTo(hostName: string, port: number): Promise<void>;
	disconnect(): void;
	peek(numBytes: number): ArrayBuffer;
	read(numBytes: number): ArrayBuffer;
	write(data: ArrayBuffer | ArrayBufferView): void;
}

declare class Sound
{
	static fromFile(fileName: string): Promise<Sound>;

	constructor(fileName: string);

	readonly fileName: string;
	readonly length: number;
	pan: number;
	readonly playing: boolean;
	position: number;
	repeat: boolean;
	speed: number;
	volume: number;

	pause(): void;
	play(mixer?: Mixer): void;
	stop(): void;
}

declare class SoundStream
{
	constructor(sampleRate?: number, bitsPerSample?: 8 | 16 | 24 | 32, numChannels?: number);

	readonly length: number;

	pause(): void;
	play(mixer?: Mixer): void;
	stop(): void;
	write(data: ArrayBuffer | ArrayBufferView): void;
}

declare class Surface extends Texture
{
	static readonly Screen: Surface;

	static fromFile(fileName: string): Promise<Surface>;

	blendOp: BlendOp;
	readonly height: number;
	transform: Transform;
	readonly width: number;

	constructor(fileName: string);
	constructor(width: number, height: number, content?: Color | ArrayBuffer);

	clipTo(x: number, y: number, width: number, height: number): void;
	toTexture(): Texture;
}

declare class Texture
{
	static fromFile(fileName: string): Promise<Texture>;

	readonly fileName: string;
	readonly height: number;
	readonly width: number;

	constructor(fileName: string);
	constructor(surface: Surface);
	constructor(width: number, height: number, content?: Color | ArrayBuffer);

	download(): Uint8ClampedArray;
	upload(data: ArrayBuffer | ArrayBufferView): void;
}

declare class Transform
{
	constructor();

	readonly matrix: number[][];

	compose(transform: Transform): void
	identity(): void
	project2D(left: number, top: number, right: number, bottom: number, near?: number, far?: number): void
	project3D(fov: number, aspect: number, near: number, far: number): void
	rotate(angle: number, vx?: number, vy?: number, vz?: number): void
	scale(sx: number, sy: number, sz?: number): void
	translate(x: number, y: number, z?: number): void
}

declare class VertexList
{
	constructor(vertices: Vertex[]);
}

declare namespace Z
{
	function deflate(data: ArrayBuffer | ArrayBufferView, level?: number): ArrayBuffer;
	function inflate(data: ArrayBuffer | ArrayBufferView, level?: number): ArrayBuffer;
}

declare module 'sphere-runtime'
{
	const from: typeof import('from').default;
	const Console: typeof import('console').default;
	const Easing: typeof import('tween').Easing;
	const FocusTarget: typeof import('focus-target').default;
	const Logger: typeof import('logger').default;
	const Music: typeof import('music').default;
	const Prim: typeof import('prim').default;
	const Query: typeof import('from').Query;
	const Random: typeof import('random').default;
	const Thread: typeof import('thread').default;
	const Tween: typeof import('tween').default;
}

declare module 'console'
{
	export default Console;

	import Thread from 'thread';

	interface ConsoleOptions
	{
		hotKey?: Key | null;
		inBackground?: boolean;
		logFileName?: string | null;
		mouseKey?: MouseKey | null;
		prompt?: string;
		priority?: number;
	}

	class Console extends Thread
	{
		constructor(options?: ConsoleOptions);

		visible: boolean;

		defineObject<T>(name: string, thisArg: T, methods: {} & ThisType<T>): void;
		log(...texts: string[]): void;
		start(): Promise<void>;
		undefineObject(name: string): void;
	}
}

declare module 'focus-target'
{
	export default FocusTarget;

	interface FocusTargetOptions
	{
		priority?: number;
	}

	class FocusTarget
	{
		constructor(options?: FocusTargetOptions);

		readonly hasFocus: boolean;

		dispose(): void;
		takeFocus(): void;
		yield(): void;
	}
}

declare module 'from'
{
	export default from;
	export { Query };

	function from<T>(...sources: Iterable<T>[]): Query<T>

	class Query<T> implements Iterable<T>
	{
		[Symbol.iterator](): Iterator<T>;

		all(predicate: (value: T) => boolean): boolean;
		allIn(values: Iterable<T>): boolean;
		any(predicate: (value: T) => boolean): boolean;
		anyIn(values: Iterable<T>): boolean;
		anyIs(value: T): boolean;
		ascending<K>(keySelector?: (value: T) => K): Query<T>;
		besides(callback: (value: T) => void): Query<T>;
		concat(...sources: Iterable<T>[]): Query<T>;
		count(): number;
		countBy<K extends string>(keySelector: (value: T) => K): Record<K, number>;
		descending<K>(keySelector?: (value: T) => K): Query<T>;
		drop(count: number): Query<T>;
		dropLast(count: number): Query<T>;
		dropWhile(predicate: (value: T) => boolean): Query<T>;
		first(predicate?: (value: T) => boolean): T;
		forEach(iteratee: (value: T) => void): void;
		groupBy<K extends string>(keySelector: (value: T) => K): Record<K, T[]>;
		join<U, R>(joinSource: Iterable<U>, predicate: (left: T, right: U) => boolean, selector: (left: T, right: U) => R): Query<R>;
		last(predicate?: (value: T) => boolean): T;
		memoize(): Query<T>;
		over<R>(selector: (value: T) => Iterable<R>): Query<R>;
		plus(...values: T[]): Query<T>;
		pull(...values: T[]): Query<T>;
		random(count: number): Query<T>;
		reduce<R>(reducer: (accumulator: R, value: T) => R, seed: R): R;
		remove(predicate: (value: T) => boolean): void;
		reverse(): Query<T>;
		sample(count: number): Query<T>;
		select<R>(selector: (value: T) => R): Query<R>;
		shuffle(): Query<T>;
		take(count: number): Query<T>;
		takeLast(count: number): Query<T>;
		takeWhile(predicate: (value: T) => boolean): Query<T>;
		thru<R>(transform: (values: T[]) => Iterable<R>): Query<R>;
		toArray(): T[];
		uniq(): Query<T>;
		uniq<K>(predicate: (value: T) => K): Query<T>;
		update<R>(selector: (value: T) => R): void;
		valueAt(index: number): T | undefined;
		where(predicate: (value: T) => boolean): Query<T>;
		without(...values: T[]): Query<T>;
		zip<U>(zipSource: Iterable<U>): Query<[ T, U ]>;
		zip<U, R>(zipSource: Iterable<U>, selector: (left: T, right: U) => R): Query<R>;
	}
}

declare module 'logger'
{
	export default Logger;

	class Logger
	{
		constructor(fileName: string);

		beginGroup(title: string): void;
		endGroup(): void;
		write(text: string): void;
	}
}

declare module 'music'
{
	export default Music;

	namespace Music
	{
		function adjustVolume(newVolume: number, numFrames?: number): Promise<void>;
		function override(fileName: string, fadeFrames?: number): void;
		function play(fileName: string, fadeFrames?: number): void;
		function pop(fadeFrames?: number): void;
		function push(fileName: string, fadeFrames?: number): void;
		function reset(fadeFrames?: number): void;
	}
}

declare module 'prim'
{
	export default Prim;

	namespace Prim
	{
		function blit(surface: Surface, x: number, y: number, texture: Texture, mask?: Color): void;
		function blitSection(surface: Surface, x: number, y: number, texture: Texture, sx: number, sy: number, width: number, height: number, mask?: Color): void;
		function drawCircle(surface: Surface, x: number, y: number, radius: number, color: Color): void;
		function drawEllipse(surface: Surface, x: number, y: number, rx: number, ry: number, color: Color): void;
		function drawLine(surface: Surface, x1: number, y1: number, x2: number, y2: number, thickness: number, color: Color, color2?: Color): void;
		function drawPoint(surface: Surface, x: number, y: number, color: Color): void;
		function drawRectangle(surface: Surface, x: number, y: number, width: number, height: number, thickness: number, color: Color): void;
		function drawSolidCircle(surface: Surface, x: number, y: number, radius: number, color: Color, color2?: Color): void;
		function drawSolidEllipse(surface: Surface, x: number, y: number, rx: number, ry: number, color: Color, color2?: Color): void;
		function drawSolidRectangle(surface: Surface, x: number, y: number, width: number, height: number, color: Color): void;
		function drawSolidRectangle(surface: Surface, x: number, y: number, width: number, height: number, colorUL: Color, colorUR: Color, colorLR: Color, colorLL: Color): void;
		function drawSolidTriangle(surface: Surface, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: Color): void;
		function drawSolidTriangle(surface: Surface, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color1: Color, color2: Color, color3: Color): void;
		function fill(surface: Surface, color: Color): void;
	}
}

declare module 'random'
{
	export default Random;

	namespace Random
	{
		function chance(odds: number): boolean;
		function discrete(min: number, max: number): number;
		function normal(mean: number, sigma: number): number;
		function sample<T>(array: T[]): T;
		function string(length?: number): string;
		function uniform(mean: number, variance: number): number;
	}
}

declare module 'thread'
{
	export default Thread;

	class Thread
	{
		static join(...threads: Thread[]): Promise<void>;

		constructor(options?: JobOptions);

		readonly hasFocus: boolean;
		readonly priority: number;
		readonly running: boolean;

		on_startUp(): void;
		on_shutDown(): void;
		on_inputCheck(): void;
		on_render(): void;
		on_update(): void;

		pause(): void;
		resume(): void;
		start(): Promise<void>;
		stop(): void;
		takeFocus(): void;
		yieldFocus(): void;
	}
}

declare module 'tween'
{
	export default Tween;
	export { Easing };

	enum Easing
	{
		Back,
		Bounce,
		Circular,
		Cubic,
		Elastic,
		Exponential,
		Linear,
		Quadratic,
		Quartic,
		Quintic,
		Sine,
	}

	class Tween<K extends PropertyKey>
	{
		constructor(object: Record<K, number>, easingType?: Easing);

		easeIn(newValues: Record<K, number>, numFrames: number): Promise<void>;
		easeInOut(newValues: Record<K, number>, numFrames: number): Promise<void>;
		easeOut(newValues: Record<K, number>, numFrames: number): Promise<void>;
	}
}
