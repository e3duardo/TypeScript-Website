define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sandboxThemeDark = exports.sandboxTheme = void 0;
    const blue = "3757ef";
    const darkerBlue = "1142AF";
    const grey = "6c6f2d";
    const greenDark = "0c840a";
    exports.sandboxTheme = {
        base: "vs",
        inherit: true,
        rules: [
            { token: "", foreground: "000000", background: "fffffe" },
            { token: "invalid", foreground: "cd3131" },
            { token: "emphasis", fontStyle: "italic" },
            { token: "strong", fontStyle: "bold" },
            { token: "variable", foreground: "11bb11" },
            { token: "variable.predefined", foreground: "4864AA" },
            { token: "constant", foreground: "44ee11" },
            { token: "comment", foreground: grey },
            { token: "number", foreground: greenDark },
            { token: "number.hex", foreground: "3030c0" },
            { token: "regexp", foreground: "#811f3f" },
            { token: "annotation", foreground: "808080" },
            { token: "type", foreground: darkerBlue },
            { token: "delimiter", foreground: "000000" },
            { token: "delimiter.html", foreground: "383838" },
            { token: "delimiter.xml", foreground: "0000FF" },
            { token: "tag", foreground: "800000" },
            { token: "key", foreground: "863B00" },
            { token: "string.key.json", foreground: "A31515" },
            { token: "string.value.json", foreground: "0451A5" },
            { token: "string", foreground: greenDark },
            { token: "keyword", foreground: blue },
            { token: "keyword.json", foreground: "0451A5" },
        ],
        colors: {
            editorBackground: "#fafafa",
            editorForeground: "#000000",
            editorInactiveSelection: "#E5EBF1",
            editorIndentGuides: "#D3D3D3",
            editorActiveIndentGuides: "#939393",
            editorSelectionHighlight: "#ADD6FF4D",
        },
    };
    exports.sandboxThemeDark = {
        base: "vs-dark",
        inherit: true,
        rules: [
            { token: "constant", foreground: "44ee11" },
            { token: "comment", foreground: "919441" },
            { token: "regexp", foreground: "#811f3f" },
            { token: "type", foreground: blue },
        ],
        colors: {
        // 'editor.background': '#313131',
        },
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zYW5kYm94L3NyYy90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQUEsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFBO0lBQ3JCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQTtJQUUzQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUE7SUFDckIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFBO0lBRWIsUUFBQSxZQUFZLEdBQXdEO1FBQy9FLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUU7WUFDTCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQ3pELEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQzFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFO1lBQzFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO1lBRXRDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQzNDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDdEQsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDM0MsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDdEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDN0MsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDN0MsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7WUFFekMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDNUMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUNqRCxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUVoRCxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUV0QyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUN0QyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQ2xELEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFFcEQsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7WUFFMUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDdEMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7U0FDaEQ7UUFDRCxNQUFNLEVBQUU7WUFDTixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsdUJBQXVCLEVBQUUsU0FBUztZQUNsQyxrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLHdCQUF3QixFQUFFLFNBQVM7WUFDbkMsd0JBQXdCLEVBQUUsV0FBVztTQUN0QztLQUNGLENBQUE7SUFFWSxRQUFBLGdCQUFnQixHQUF3RDtRQUNuRixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFO1lBQ0wsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDM0MsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7U0FDcEM7UUFDRCxNQUFNLEVBQUU7UUFDTixrQ0FBa0M7U0FDbkM7S0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmx1ZSA9IFwiMzc1N2VmXCJcbmNvbnN0IGRhcmtlckJsdWUgPSBcIjExNDJBRlwiXG5cbmNvbnN0IGdyZXkgPSBcIjZjNmYyZFwiXG5jb25zdCBncmVlbkRhcmsgPSBcIjBjODQwYVwiXG5cbmV4cG9ydCBjb25zdCBzYW5kYm94VGhlbWU6IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikuZWRpdG9yLklTdGFuZGFsb25lVGhlbWVEYXRhID0ge1xuICBiYXNlOiBcInZzXCIsXG4gIGluaGVyaXQ6IHRydWUsXG4gIHJ1bGVzOiBbXG4gICAgeyB0b2tlbjogXCJcIiwgZm9yZWdyb3VuZDogXCIwMDAwMDBcIiwgYmFja2dyb3VuZDogXCJmZmZmZmVcIiB9LFxuICAgIHsgdG9rZW46IFwiaW52YWxpZFwiLCBmb3JlZ3JvdW5kOiBcImNkMzEzMVwiIH0sXG4gICAgeyB0b2tlbjogXCJlbXBoYXNpc1wiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcbiAgICB7IHRva2VuOiBcInN0cm9uZ1wiLCBmb250U3R5bGU6IFwiYm9sZFwiIH0sXG5cbiAgICB7IHRva2VuOiBcInZhcmlhYmxlXCIsIGZvcmVncm91bmQ6IFwiMTFiYjExXCIgfSxcbiAgICB7IHRva2VuOiBcInZhcmlhYmxlLnByZWRlZmluZWRcIiwgZm9yZWdyb3VuZDogXCI0ODY0QUFcIiB9LFxuICAgIHsgdG9rZW46IFwiY29uc3RhbnRcIiwgZm9yZWdyb3VuZDogXCI0NGVlMTFcIiB9LFxuICAgIHsgdG9rZW46IFwiY29tbWVudFwiLCBmb3JlZ3JvdW5kOiBncmV5IH0sXG4gICAgeyB0b2tlbjogXCJudW1iZXJcIiwgZm9yZWdyb3VuZDogZ3JlZW5EYXJrIH0sXG4gICAgeyB0b2tlbjogXCJudW1iZXIuaGV4XCIsIGZvcmVncm91bmQ6IFwiMzAzMGMwXCIgfSxcbiAgICB7IHRva2VuOiBcInJlZ2V4cFwiLCBmb3JlZ3JvdW5kOiBcIiM4MTFmM2ZcIiB9LFxuICAgIHsgdG9rZW46IFwiYW5ub3RhdGlvblwiLCBmb3JlZ3JvdW5kOiBcIjgwODA4MFwiIH0sXG4gICAgeyB0b2tlbjogXCJ0eXBlXCIsIGZvcmVncm91bmQ6IGRhcmtlckJsdWUgfSxcblxuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyXCIsIGZvcmVncm91bmQ6IFwiMDAwMDAwXCIgfSxcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5odG1sXCIsIGZvcmVncm91bmQ6IFwiMzgzODM4XCIgfSxcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci54bWxcIiwgZm9yZWdyb3VuZDogXCIwMDAwRkZcIiB9LFxuXG4gICAgeyB0b2tlbjogXCJ0YWdcIiwgZm9yZWdyb3VuZDogXCI4MDAwMDBcIiB9LFxuXG4gICAgeyB0b2tlbjogXCJrZXlcIiwgZm9yZWdyb3VuZDogXCI4NjNCMDBcIiB9LFxuICAgIHsgdG9rZW46IFwic3RyaW5nLmtleS5qc29uXCIsIGZvcmVncm91bmQ6IFwiQTMxNTE1XCIgfSxcbiAgICB7IHRva2VuOiBcInN0cmluZy52YWx1ZS5qc29uXCIsIGZvcmVncm91bmQ6IFwiMDQ1MUE1XCIgfSxcblxuICAgIHsgdG9rZW46IFwic3RyaW5nXCIsIGZvcmVncm91bmQ6IGdyZWVuRGFyayB9LFxuXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkXCIsIGZvcmVncm91bmQ6IGJsdWUgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQuanNvblwiLCBmb3JlZ3JvdW5kOiBcIjA0NTFBNVwiIH0sXG4gIF0sXG4gIGNvbG9yczoge1xuICAgIGVkaXRvckJhY2tncm91bmQ6IFwiI2ZhZmFmYVwiLFxuICAgIGVkaXRvckZvcmVncm91bmQ6IFwiIzAwMDAwMFwiLFxuICAgIGVkaXRvckluYWN0aXZlU2VsZWN0aW9uOiBcIiNFNUVCRjFcIixcbiAgICBlZGl0b3JJbmRlbnRHdWlkZXM6IFwiI0QzRDNEM1wiLFxuICAgIGVkaXRvckFjdGl2ZUluZGVudEd1aWRlczogXCIjOTM5MzkzXCIsXG4gICAgZWRpdG9yU2VsZWN0aW9uSGlnaGxpZ2h0OiBcIiNBREQ2RkY0RFwiLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3Qgc2FuZGJveFRoZW1lRGFyazogaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5lZGl0b3IuSVN0YW5kYWxvbmVUaGVtZURhdGEgPSB7XG4gIGJhc2U6IFwidnMtZGFya1wiLFxuICBpbmhlcml0OiB0cnVlLFxuICBydWxlczogW1xuICAgIHsgdG9rZW46IFwiY29uc3RhbnRcIiwgZm9yZWdyb3VuZDogXCI0NGVlMTFcIiB9LFxuICAgIHsgdG9rZW46IFwiY29tbWVudFwiLCBmb3JlZ3JvdW5kOiBcIjkxOTQ0MVwiIH0sXG4gICAgeyB0b2tlbjogXCJyZWdleHBcIiwgZm9yZWdyb3VuZDogXCIjODExZjNmXCIgfSxcbiAgICB7IHRva2VuOiBcInR5cGVcIiwgZm9yZWdyb3VuZDogYmx1ZSB9LFxuICBdLFxuICBjb2xvcnM6IHtcbiAgICAvLyAnZWRpdG9yLmJhY2tncm91bmQnOiAnIzMxMzEzMScsXG4gIH0sXG59XG4iXX0=