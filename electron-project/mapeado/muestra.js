public class Viticultivo implements Comparable < Viticultivo > {
    private static String BD_SERVER = "localhost";
    private static String BD_NAME = "VINOS";


    private String referencia_catastral;
    private String nombre_finca;
    private String nif_propietario;
    private String nombre_propietario;
    private double superficie;
    private int kilos_producidos;
    private String region_vinicola;
    private Uva uva;

    public static List < Viticultivo > ListaViticultivos() {
        // Retorna una lista con todos los objetos de la clase almacenados en la base de datos		
        List < Viticultivo > lista = new ArrayList < Viticultivo > ();

        BD miBD = new BD(BD_SERVER, BD_NAME);

        for (Object[] tupla: miBD.Select("SELECT REFERENCIA_CATASTRAL FROM VITICULTIVOS")) {
            String ref = (String) tupla[0];
            lista.add(new Viticultivo(ref));
        }

        return lista;
    }

    public static void LimpiaTabla() {
        // Borra todas las tuplas de la tabla
        for (Viticultivo v: Viticultivo.ListaViticultivos()) {
            v.borrarViticultivos();
        }
    }


    public Viticultivo(String id) {
        // Crea el objeto cargando sus valores de la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);

        Object[] o = miBD.Select("SELECT * FROM VITICULTIVOS where REFERENCIA_CATASTRAL='" + id + "';").get(0);

        this.referencia_catastral = (String) o[0];
        this.nombre_finca = (String) o[1];
        this.nif_propietario = (String) o[2];
        this.nombre_propietario = (String) o[3];
        this.superficie = (double) o[4];
        this.kilos_producidos = (int) o[5];
        this.region_vinicola = (String) o[6];
        this.uva = new Uva((int) o[7]);

    }

    public Viticultivo(String referencia_catastral,
        String nombre_finca,
        String nif_propietario,
        String nombre_propietario,
        double superficie,
        int kilos_producidos,
        String region_vinicola,
        Uva uva) {
        // Crea el objeto y lo inserta en la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);
        /*
        System.out.println("INSERT INTO VITICULTIVOS values('"+referencia_catastral+
        		"','"+nombre_finca+
        		 "','"+nif_propietario+
        		 "','"+nombre_propietario+
        		 "',"+superficie+
        		 ","+kilos_producidos+
        		 ",'"+region_vinicola+
        		 "',"+uva.getID()+
        		 ");"
        		 + ");");
        */
        miBD.Insert("INSERT INTO VITICULTIVOS values('" + referencia_catastral +
            "','" + nombre_finca +
            "','" + nif_propietario +
            "','" + nombre_propietario +
            "'," + superficie +
            "," + kilos_producidos +
            ",'" + region_vinicola +
            "'," + uva.getID() +
            ");");

        this.referencia_catastral = referencia_catastral;
        this.nombre_finca = nombre_finca;
        this.nif_propietario = nif_propietario;
        this.nombre_propietario = nombre_propietario;
        this.superficie = superficie;
        this.kilos_producidos = kilos_producidos;
        this.region_vinicola = region_vinicola;
        this.uva = uva;
    }

    public String getReferencia_catastral() {
        return referencia_catastral;
    }

    public void setReferencia_catastral(String value) {
        // Actualiza el atributo en memoria y en la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Update("UPDATE VITICULTIVOS SET REFERENCIA_CATASTRAL='" + value + "' where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.referencia_catastral = value;
    }

    public String getNombre_finca() {
        return nombre_finca;
    }

    public void setNombre_finca(String value) {
        // Actualiza e	BD miBD= new BD(BD_SERVER,BD_NAME);
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Update("UPDATE VITICULTIVOS SET NOMBRE_FINCA='" + value + "' where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.nombre_finca = value;
    }

    public String getNif_propietario() {
        return nif_propietario;
    }

    public void setNif_propietario(String value) {
        // Actualiza el atributo en memoria y en la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Update("UPDATE VITICULTIVOS SET NIF_PROPIETARIO='" + value + "' where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.nif_propietario = value;
    }

    public String getNombre_propietario() {
        return nombre_propietario;
    }

    public void setNombre_propietario(String value) {
        // Actualiza el atributo en memoria y en la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Update("UPDATE VITICULTIVOS SET NOMBRE_PROPIETARIO='" + value + "' where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.nombre_propietario = value;
    }

    public double getSuperficie() {
        return superficie;
    }

    public void setSuperficie(double value) {
        // Actualiza el atributo en memoria y en la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Update("UPDATE VITICULTIVOS SET SUPERFICIE=" + value + " where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.superficie = value;
    }

    public int getKilos_producidos() {
        return kilos_producidos;
    }

    public void setKilos_producidos(int value) {
        // Actualiza el atributo en memoria y en la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Update("UPDATE VITICULTIVOS SET KILOS_PRODUCIDOS=" + value + " where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.kilos_producidos = value;
    }

    public String getRegion_vinicola() {
        return region_vinicola;
    }

    public void setRegion_vinicola(String value) {
        // Actualiza el atributo en memoria y en la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Update("UPDATE VITICULTIVOS SET REGION_VINICOLA='" + value + "' where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.region_vinicola = value;
    }

    public Uva getUva() {
        return uva;
    }

    public void setUva(Uva value) {
        // Actualiza el atributo en memoria y en la base de datos
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Update("UPDATE VITICULTIVOS SET UVA=" + value.getID() + " where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.uva = value;
    }

    public void borrarViticultivos() {
        // Borra el objeto actual de la base de datos 
        BD miBD = new BD(BD_SERVER, BD_NAME);

        miBD.Delete("DELETE FROM VITICULTIVOS where REFERENCIA_CATASTRAL='" + this.referencia_catastral + "';");
        this.referencia_catastral = null;
        this.nombre_finca = null;
        this.nif_propietario = null;
        this.nombre_propietario = null;
        this.superficie = -1;
        this.kilos_producidos = -1;
        this.region_vinicola = null;
        this.uva = null;
    }

    public String toString() {
        return this.referencia_catastral + ";" +
            this.nombre_finca + ";" +
            this.nif_propietario + ";" +
            this.nombre_propietario + ";" +
            this.superficie + ";" +
            this.kilos_producidos + ";" +
            this.region_vinicola + ";" +
            this.uva;
    }

    public boolean equals(Object obj) {
        return (obj instanceof Viticultivo) &&
            (referencia_catastral.equalsIgnoreCase(((Viticultivo) obj).referencia_catastral));
    }

    public int hashCode() {
        return referencia_catastral.hashCode();
    }

    public int compareTo(Viticultivo o) {
        return referencia_catastral.compareToIgnoreCase(o.referencia_catastral);
    }

}