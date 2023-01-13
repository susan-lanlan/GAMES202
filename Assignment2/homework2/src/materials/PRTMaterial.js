class PRTMaterial extends Material {

    constructor(vertexShader, fragmentShader) {
        
        super({
            'uPrecomputeLR': { type: 'uPrecomputeLR', value: null },
            'uPrecomputeLG': { type: 'uPrecomputeLG', value: null },
            'uPrecomputeLB': { type: 'uPrecomputeLB', value: null },
        }, ['aPrecomputeLT'], vertexShader, fragmentShader, null);
      
    }
}

async function buildPRTMaterial(vertexPath, fragmentPath) {


    let vertexShader = await getShaderString(vertexPath);
    let fragmentShader = await getShaderString(fragmentPath);

    return new PRTMaterial(vertexShader, fragmentShader);

}